import React from 'react';
import logo from '../assets/images/Black White Minimalist SImple Monogram Typography Logo (1).svg';
import logo1 from '../assets/images/Black White Minimalist SImple Monogram Typography Logo.png';

import { BsWhatsapp } from 'react-icons/bs';

import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { info } from '../Data/data';

function Info() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <nav className="relative flex h-screen pt-6 xl:container xl:mx-auto">
          <div className="absolute top-0 bottom-0 left-0 right-0 h-screen mx-auto">
            <img
              className="absolute hidden translate-x-1/2 xl:-top-2 right-2/4 lg:block left-2/4 md:w-32 2xl:w-52"
              src={logo1}
              alt=""
            />
            <img
              src={logo}
              alt="logo"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="absolute right-0 md:right-12 top-12 md:top-20 ">
            <div className="block p-1 px-5 text-2xl rounded-lg navbar-container md:hidden">
              <div
                className="flex flex-col items-end navbar-toggle"
                onClick={toggleNav}
              >
                {isNavOpen ? <FaTimes /> : <FaBars />}
              </div>
              {isNavOpen && (
                <a
                  href="tel:+966574857926"
                  className="p-1 px-2 text-sm rounded-lg bg-main"
                >
                  الإتصال بنا
                </a>
              )}
            </div>

            <a
              className="hidden p-1 px-5 text-2xl rounded-lg md:block bg-main"
              href="tel:+966574857926"
            >
              الإتصال بنا
            </a>
          </div>
        </nav>
      </header>
      <section className=" xl:container xl:mx-auto">
        <a href="https://wa.me/+966574857926">
          <div className="fixed z-50 bg-green-500 rounded-full bottom-10 right-2 sm:p-1 md:p-3">
            <BsWhatsapp className="text-4xl text-white " />
          </div>
        </a>
        {info.map(task => {
          return (
            <main className="relative h-height_bg">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg"></div>
              <img src={task.img} alt="info1" className="w-full h-full " />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center text-alt">
                <div className="flex flex-col px-5 text-center md:items-center">
                  <h1 className="text-4xl lg:text-5xl">
                    {task.header[0]} <br /> {task.header[1]}
                  </h1>
                  <p className="px-2 my-4 text-xl md:text-2xl md:px-32 indent-3 ">
                    {task.text}
                  </p>
                  <a
                    href="tel:+966574857926"
                    className={`${
                      task.indent ? 'flex  lg:ml-auto mt-4 justify-center' : ''
                    } px-5 py-3 text-lg md:text-2xl text-black rounded-lg bg-main`}
                  >
                    {task.tel}{' '}
                  </a>
                </div>
              </div>
            </main>
          );
        })}

        <main className="px-6 py-20 md:text-xl bg-slate-200">
          <h4 className="my-4 text-xl font-bold md:text-2xl">
            مرحبا بكم في لمسه إبداع للتشطيبات الداخلية
          </h4>
          <div className=" md:ml-52">
            <p>
              في لمسه إبداع للتشطيبات الداخلية ، نقدم خدمات المقاولات والتشطيبات
              الداخلية من الدرجة الأولى لجميع احتياجات منزلك والتجارية. لدينا
              فريق من المهنيين مدربين تدريباً عالياً وذوي خبرة في جميع جوانب
              التصميم الداخلي والبناء وإدارة المشاريع. سواء كنت تبحث عن تجديد
              غرفة واحدة أو تجديد المبنى بالكامل ، لدينا الخبرة والأدوات
              والتفاني لتحقيق ذلك.
            </p>
            <p>
              نسعى جاهدين لتزويد عملائنا بأفضل النتائج في جميع الأوقات ونلتزم
              بالاستماع إلى احتياجاتك وإيجاد الحلول الإبداعية التي تناسبك. سيعمل
              فريقنا من المصممين والبنائين والمقاولين ذوي الخبرة معًا للتأكد من
              اكتمال مشروعك في الوقت المحدد وفي حدود الميزانية. لذلك لا تتردد في
              التواصل معنا لتلبية جميع احتياجاتك في مجال المقاولات والتشطيبات
              الداخلية اليوم!
            </p>
          </div>
        </main>
      </section>
    </>
  );
}

export default Info;

/**        <main className="relative h-height_bg">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg"></div>
          <img src={info1} alt="info1" className="w-full h-full " />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center text-alt">
            <div className="flex flex-col px-5 text-center md:items-center">
              <h1 className="text-4xl lg:text-5xl">
                لمسه إبداع: <br /> تشطيبات ذات نوعية عالية
              </h1>
              <p className="px-2 my-4 text-xl md:text-2xl md:px-28 lg:px-48">
                لمسه إبداع هي شركة تقدم حلولاً فنية في مجال التشطيبات الداخلية،
                حيث توفر مواد متخصصة، عمال محترفين وخدمات تصميم متنوعة، مصممة
                لتوفير التشطيبات -الداخلية المثالية لمنزلك. او لشركتك.وايضا
                للمحلات التجاري نتكون من امهر العاملين لانجاز نشاط التشطيبات
                الداخليه بالكامل في وقت قياسي . وباسعار تتوافق مع الجميع رضاكم
                غايتنا
              </p>
              <a
                href="tel:+200574857926"
                className="px-5 py-3 text-lg text-black rounded-lg bg-main"
              >
                تواصل معنا /
              </a>
            </div>
          </div>
        </main>
        <main className="relative h-height_bg">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg"></div>
          <img src={info2} alt="info2" className="w-full h-full " />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-right text-alt">
            <div className="flex flex-col items-center px-5 text-center lg:items-start">
              <h1 className="text-4xl lg:text-5xl lg:text-right ">
                لمسه إبداع: بناء المستقبل
              </h1>

              <p className="px-2 text-xl md:text-2xl mb-9 md:px-28 lg:px-0 lg:ml-96 ">
                لمسه إبداع: هي شركة متخصصة في توفير الخدمات المتعلقة بالتعاقد
                والتشطيبات الداخلية، ونحن نهتم ببناء المستقبل بشكل يؤمن التميز
                والجودة العالية. نحن نقدم خدمات فائقة الجودة والمتخصصة لمشاريعنا
                المختلفة، بما في ذلك تخطيط وتنفيذ المشاريع ومنها اعمال السباكه
                الداخليه .والدهانات الداخليه .واعمال الديكور الداخليه . والجبس
                بورد .والكثير مما يدور ببالك فقط اطلب تجد امهر العماله المتخصصه
                مع امكانيه توافر جميع الخامات التي تناسب احتياجك وايضا علي خبره
                ودرايه تامه واصلاح الاعطال والتجديدات الداخليه .
              </p>
              <a
                href="tel:+200574857926"
                className="px-5 py-3 text-lg text-black rounded-lg bg-main"
              >
                لمسه إبداع للدهانات والتشطيبات الداخليه
              </a>
            </div>
          </div>
        </main>
        <main className="relative h-height_bg">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-bg"></div>
          <img src={info3} alt="info1" className="w-full h-full " />
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-center text-alt">
            <div className="flex flex-col px-5 text-center md:items-center">
              <h1 className="text-4xl lg:text-5xl">
                لمسه إبداع للتشطيبات الداخلية
              </h1>
              <p className="px-2 text-xl md:text-2xl mb-9 md:px-28 lg:px-48">
                لمسه إبداع هي شركة لخدمات التشطيبات الداخلية تقدم خدمات لجميع
                الأحجام من المشاريع التشطيبية الداخلية، من التصميم والتنفيذ إلى
                التعديلات الداخلية المتقدمة. تستخدم لمسه إبداع للتشطيبات
                الداخلية المستوى العالي من العماله الماهره لضمان تحقيق النتائج
              </p>
              <a
                href="tel:+200574857926"
                className="px-5 py-3 text-lg text-black rounded-lg bg-main"
              >
                تواصل الان
              </a>
            </div>
          </div>
        </main> */
