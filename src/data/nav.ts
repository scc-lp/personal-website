import IconHomeLight from '@/assets/images/icon-home-light.svg';
import IconHomeDark from '@/assets/images/icon-home-dark.svg';
import IconProjectLight from '@/assets/images/icon-project-light.svg';
import IconProjectDark from '@/assets/images/icon-project-dark.svg';
import IconEleDark from '@/assets/images/icon-ele-dark.svg';
const navList = [
    {
        "name": "首页",
        "iconLight": IconHomeLight,
        "iconDark": IconHomeDark
    },
    {
        "name": "项目",
        "iconLight": IconProjectLight,
        "iconDark": IconProjectDark
    },
    {
        "name": "知识库",
        "iconLight": IconEleDark,
        "iconDark": IconEleDark,
        "link": "/knowledge"
    },
]

export default navList;