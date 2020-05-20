export type Atom = {
  key:     string;
  default: any;
};

export type Ref = {
  current: any;
};

export type EdgeT = {
  from: Atom;
  to:   Atom;
};
