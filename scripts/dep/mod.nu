export def main [] {
  let project_name = (
    open ./scripts/dep/.config.nuon
    | get project_name
    | str snake-case
  );

  print $"(ansi yb)WRN:(ansi reset)make sure to run (ansi gu)`use script/dep *`(ansi reset) if u running nushell or (ansi gu)`nu -c 'use script/dep *; <dep command>'`(ansi reset) if u running any thing else to use this script.(char nl)(ansi gb)valid command:(char nl)(ansi reset)(char tab)(ansi b)install(ansi reset) (ansi p)install all dependencies ~/.local/share/dm/($project_name)(char nl)(ansi reset)(char tab)(ansi b)use(ansi reset) (ansi p)# to use the dep (char lp)to find them in PATH(char rp)(ansi reset)"

};

export def "dep install" [] {
  print $"(ansi green)installing depandencies(ansi reset)"

  const DEPS_FILE = "./scripts/dep/packages.nu";

  if not ( $DEPS_FILE| path exists ) {
    error make {
      msg: "no deps.nuon file found"
      label: {
        text: "this file is required to install dependencies"
        span: (metadata $DEPS_FILE).span
      }
      help: "make sure this script in the root file of the project becose we ugeley put this file in project root. or make one if not exist"

    }

  }

    nu -c $"
    use ($DEPS_FILE)
    for $pkg in \(packages) {
      print $'\(ansi bb)installing \($pkg.name)\(ansi reset)';
      do \($pkg.script);
    }
    ";

};

export def "dep use" [] {
  print $"(ansi yellow_bold)make sure you are in the project root to use this command(ansi reset)"

  $env.path = (
    $env.path
    | prepend (
      [
        "~/.local/share/dm"
        (
          open ./scripts/dep/.config.nuon
          | get project_name
          | str snake-case
        )
      ] | path join
      | path expand
    )
  );

};
