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
   category language author copyright docs image))

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
   (link :initarg :link
		 :accessor link)))

(defvar *acylx* (make-instance 'web :name "shft.dev" :link "https://www.shft.dev" :description "Feed de shft.dev"))

(with-slots (category language author copyright docs image) *acylx*
  (setq category "Tecnologia")
  (setq language "en-us")
  (setq author "ivvil412@gmail.com")
  (setq image (make-instance 'image :location "https://www.shft.dev/assets/favicon.png" :name "shft.dev" :link "https://www.shft.dev")))

(defun create-rss-feed-item (obj)
  )

(defun get-rss-feed (obj)
  (cxml:with-xml-output (cxml:make-octet-stream-sink stream :indentation 2 :canonical nil)
	(cxml:with-element "rss"
	  (cxml:attribute "version" "2.0")
	  (cxml:with-element "channel"
		(cxml:with-element "title"
		  (cxml:text (name obj)))
		(cxml:with-element "link"
		  (cxml:text (link obj)))
		(cxml:with-element "description"
		  (cxml:text (description obj)))))))
