export def main [] {
  let platform = (
    [windows linux macos]
    | input list --fuzzy "what platform do you running on ?"
  )

  let arch = (
    [x86 arm64]
    | input list --fuzzy "what arch do you running on ?"
  )

  return [
    {
      name: "d2",
      script: {||
        let url = match [$platform $arch] {
          [macos x86] => "hello"
          [macos arm64] => "hello"
          [linux x86] => "hello"
          [linux arm64] => "hello"
          [windows x86] => "hello"
          [windows arm64] => "hello"
        }

        print $url

      }

    }

  ]

};
