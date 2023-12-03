# default.nix

{ lib, buildInputs ? [] }:

with lib;

stdenv.mkDerivation rec {
  pname = "acylx";
  version = "0.1";

  src = ./.;

  nativeBuildInputs = [ nodejs ];

  buildInputs = buildInputs ++ [
    makeWrapper
    (writeText "develop-shell" ''
      source $stdenv/setup
      export PATH=$nodejs/bin:$PATH
      export PS1="[html-with-scss \W]\\$ "
      exec $SHELL
    '')
  ];

  # meta = with lib; {
  #   description = "Build HTML with SCSS";
  #   license = licenses.mit;
  # };

  passthru = {
    inherit buildInputs;
  };
}
