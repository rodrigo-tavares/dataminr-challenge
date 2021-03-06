export const dataMock = {
  features: [
    {
      name: "General",
      items: [
        {
          title: "Case management",
          value: false,
        },
        {
          title: "Map timeline",
          value: false,
        },
        {
          title: "Views & Briefings",
          value: false,
        },
        {
          title: "Notifications",
          value: false,
        },
        {
          title: "Mass communications",
          value: false,
        },
        {
          title: "Traffic Cameras",
          value: false,
        },
      ],
    },
    {
      name: "Settings",
      childs: [
        {
          title: "Audit log",
          value: false,
        },
        {
          title: "Users",
          value: false,
          children: [
            {
              title: "Users Add",
              value: false,
            },
            {
              title: "User Delete",
              value: false,
            },
            {
              title: "Users Edit",
              value: false,
            },
            {
              title: "Max users",
              value: false,
              maxValue: 100,
              selectedValue: 30,
              frequency: 10,
            },
          ],
        },
      ],
    },
    {
      name: "Alerts",
      childs: [
        {
          title: "Alert manager",
          value: false,
        },
        {
          title: "Alert Rules",
          value: false,
          maxValue: 100,
          selectedValue: 30,
          frequency: 10,
        },
      ],
    },
  ],
};
