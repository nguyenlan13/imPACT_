import { USER } from "../../routes/routesConstants";

// import { UserOutlined } from "@ant-design/icons";

export const SIDER_MENU_LIST = [
  {
    path: USER.INDEX.path,
    // icon: <UserOutlined />,
    name: USER.INDEX.name,
    children: [
        {
            path: USER.DASHBOARD.path,
            name: USER.DASHBOARD.name,
        },
        {
            path: USER.MY_PACTS.path,
            name: USER.MY_PACTS.name,
        },
        // {
        //     path: USER.MY_HABITS.path,
        //     name: USER.MY_HABITS.name,
        // },
        //   {
        //     path: USER.MY_ACTION_STEPS.path,
        //     name: USER.MY_ACTION_STEPS.name,
        //   },
          {
            path: USER.MY_PROGRESS.path,
            name: USER.MY_PROGRESS.name,
          },
    ],
  },
]
