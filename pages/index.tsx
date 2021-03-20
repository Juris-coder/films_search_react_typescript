import * as React from "react";

import { BaseLayout } from "../layouts";
import { Modal } from "../components";

export type HomePageProps = {};

const HomePageMemo: React.FC<HomePageProps> = () => {
  return (
    <BaseLayout>
      <Modal />
    </BaseLayout>
  );
};

export const HomePage = React.memo(HomePageMemo);

export default HomePage;
