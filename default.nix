  { pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  buildInputs = [
    pkgs.dart-sass
    pkgs.nodejs
    

  ];
}
