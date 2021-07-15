export const testers = [
  {
    id: "123057713482694658",
    name: "audn",
  },
  {
    id: "705665813994012695",
    name: "cnrad",
  },
  {
    id: "714863852441042965",
    name: "fish",
  },
  {
    id: "757834655516065862",
    name: "haden",
  },
  {
    id: "433577405278453760",
    name: "jm",
  },
  {
    id: "451261502138351627",
    name: "kumal",
  },
  {
    id: "291050399509774340",
    name: "matt",
  },
  {
    id: "204616460797083648",
    name: "ven",
  },
];

export function isTester(id: string): { id: string; name: string } | undefined {
  return testers.find((user) => user.id === id);
}

export type Testers = [
  {
    id: "705665813994012695";
    name: "conrad";
  },
  {
    id: "714863852441042965";
    name: "fish";
  },
  {
    id: "757834655516065862";
    name: "haden";
  },
  {
    id: "451261502138351627";
    name: "kumal";
  },
  {
    id: "291050399509774340";
    name: "matt";
  },
  {
    id: "204616460797083648";
    name: "ven";
  }
];
