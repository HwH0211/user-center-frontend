import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {BILIBILI_LINK} from "@/constants/indes";
const Footer: React.FC = () => {
  const defaultMessage = '雁丘出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Planet',
          title: '我的bb空间',
          href: BILIBILI_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 雁丘github </>,
          href: 'https://github.com/HwH0211',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
