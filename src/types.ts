export type Atom = {
  key:     string;
  default: any;
};

export type Ref = {
  current: any;
};

export type Edge = {
  from: Atom;
  to:   Atom;
};
