import React from 'react';
import Home from './components/Home';
import { Helmet } from 'react-helmet';

const content = `في لمسه إبداع للتشطيبات الداخلية ، نقدم خدمات المقاولات والتشطيبات
              الداخلية من الدرجة الأولى لجميع احتياجات منزلك والتجارية. لدينا
              فريق من المهنيين مدربين تدريباً عالياً وذوي خبرة في جميع جوانب
              التصميم الداخلي والبناء وإدارة المشاريع. سواء كنت تبحث عن تجديد
              غرفة واحدة أو تجديد المبنى بالكامل ، لدينا الخبرة والأدوات
              والتفاني لتحقيق ذلك.`;
function App() {
  return (
    <>
      <Helmet>
        <title>لمسه إبداع</title>
        <meta name="description" content={content} />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
