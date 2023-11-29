# { pkgs ? import <nixpkgs> {} }:

# with pkgs;

# let
#   inherit (lib) optional optionals;

#   # erlang = beam.interpreters.erlangR24;
#   # elixir = beam.packages.erlangR24.elixir_1_13;
#   nodejs = nodejs-14_x;

#   # sass_version = "1.53.0";
#   # sass_src = fetchurl {
#   #   url = "https://github.com/sass/dart-sass/releases/download/${sass_version}/dart-sass-${sass_version}-linux-x64.tar.gz";
#   #   sha256 = "MXSHrU96WHQMNgxKPPyHdIl8+wXI2KL7cNvDsWZoZKI=";
#   # };

# in

# mkShell {
#   buildInputs = [
#     # sass
#     # cacert
#     # erlang
#     # elixir
#     # file
#     nodejs
#     # rebar3
#     # inotify-tools
#   ];

#   # NIX_LD_LIBRARY_PATH = lib.makeLibraryPath [
#   #   stdenv.cc
#   # ];
#   # NIX_LD = builtins.readFile "${stdenv.cc}/nix-support/dynamic-linker";

#   shellHook = ''
#   '';
# }

  { pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  buildInputs = [
    pkgs.dart-sass
    pkgs.nodejs
    

  ];


  # shellHook = ''
  #             export LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath([pkgs.openssl])}:${pkgs.lib.makeLibraryPath([pkgs.sqlite])}
  #           '';
}
