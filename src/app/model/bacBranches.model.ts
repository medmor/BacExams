export class BacBranche {
  constructor(
    public key: string,
    public name: string,
  ) { }
}

export const ALLBRANCHES = [
  new BacBranche("svt", "Sciences de la Vie et de la Terre"),
  new BacBranche("sp", "Sciences Physiques"),
  new BacBranche("sm", "Sciences Mathématiques")
]
