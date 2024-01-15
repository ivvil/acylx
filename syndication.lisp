(ql:quickload :local-time)
(ql:quickload :cxml)

(defclass web ()
  ((name :initarg :name
		 :accessor name)
   (link :initarg :link
		 :accessor link)
   (description :initarg :description
				:accessor description)
   (item :accessor item)
   (generator :initform "Common Lisp syndication generator")
   (build-date :initform (local-time:universal-to-timestamp (get-universal-time)) :allocation :class :reader build-date)
   (publication-date :accessor publication-date :initform (local-time:universal-to-timestamp (get-universal-time)))
   (image :accessor image)
   category language author copyright docs))

(defclass image ()
  ((location :initarg :location
			 :accessor location)
   (name :initarg :name
		 :accessor name)
   (link :initarg :link
		 :accessor link)))

(defclass item ()
  ((url :initarg :url
		:accessor url)
   (title :initarg :title
		  :accessor title)
   (description :initarg :description
				:accessor description)))

(defvar *acylx* (make-instance 'web :name "shft.dev" :link "https://www.shft.dev" :description "Feed de shft.dev"))

(with-slots (category language author copyright docs image item) *acylx*
  (setq category "Tecnologia")
  (setq language "en-us")
  (setq author "ivvil412@gmail.com")
  (setq image (make-instance 'image :location "https://www.shft.dev/assets/favicon.png" :name "shft.dev" :link "https://www.shft.dev"))
  (setq item `(,(make-instance 'item :url "https://www.shft.dev/programming#NixOS" :title "NixOS" :description "Advantages of the NixOS linux distro") m(make-instance 'item :url "https://www.shft.dev/programming#lisp" :title "'(Lisp, the language of the '(past future))" :description "Exploration of the lisp programming language") ,(make-instance 'item :url "https://www.shft.dev/abme" :title "About me" :description "Info about me"))))

(defun create-rss-feed-item (obj)
  `(cxml:with-element "item"
	  (cxml:with-element "title"
		(cxml:text ,(title obj)))
	  (cxml:with-element "link"
		(cxml:text ,(url obj)))
	  (cxml:with-element "description"
		(cxml:text ,(description obj)))))

(defun get-rss-feed (obj)
  (with-output-to-string (stream)
	(cxml:with-xml-output (cxml:make-character-stream-sink stream)
	(cxml:with-element "rss"
	  (cxml:attribute "version" "2.0")
	  (cxml:with-element "channel"
		(cxml:with-element "title"
		  (cxml:text (name obj)))
		(cxml:with-element "link"
		  (cxml:text (link obj)))
		(cxml:with-element "description"
		  (cxml:text (description obj)))
		(cxml:with-element "image"
		  (cxml:with-element "url"
			(cxml:text (location (image obj))))
		  (cxml:with-element "title"
			(cxml:text (name (image obj))))
		  (cxml:with-element "link"
			(cxml:text (link (image obj)))))
		;; (loop for items in (item obj) collect (create-rss-feed-item obj))
		)))))

(defmacro with-xml-sintax (&body body)
  `(with-output-to-string (stream)
	 (cxml:with-xml-output (cxml:make-character-stream-sink stream)
	   ,@body)))
