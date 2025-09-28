import { ArrowLeft, Shield, Lock, Eye, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function PrivacyPolicy() {
  const [language, setLanguage] = useState('ar')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center mb-4">
            <Shield className="w-12 h-12 mr-4 text-blue-200" />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100">
                ARAKNE Platform
              </p>
            </div>
          </div>
          <div className="flex items-center text-blue-200">
            <FileText className="w-5 h-5 mr-2" />
            <p className="text-lg">
              Effective Date: September 23, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Language Toggle */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setLanguage('ar')} 
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                language === 'ar' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              العربية
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                language === 'en' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Arabic Content */}
        {language === 'ar' && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8" dir="rtl">
            <div className="prose prose-lg max-w-none text-right">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">سياسة الخصوصية لمنصة أراكني</h1>
              <p className="text-lg text-gray-600 mb-8">تاريخ السريان: 23 سبتمبر 2025</p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                مرحباً بكم في سياسة الخصوصية لمنصة أراكني. في أراكني، نلتزم بحماية خصوصيتك وبياناتك الشخصية. تشرح هذه السياسة كيفية جمعنا لمعلوماتك الشخصية واستخدامها وحمايتها عند استخدامك لمنصة أراكني.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. مقدمة</h2>
              <p className="mb-4">
                تصف سياسة الخصوصية هذه أنواع المعلومات التي قد نجمعها منك أو التي قد تقدمها عند زيارة أو استخدام منصة أراكني، وممارساتنا لجمع هذه المعلومات واستخدامها والاحتفاظ بها وحمايتها والكشف عنها. تنطبق هذه السياسة على المعلومات التي نجمعها:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>على هذه المنصة.</li>
                <li>في رسائل البريد الإلكتروني والرسائل النصية والرسائل الإلكترونية الأخرى بينك وبين هذه المنصة.</li>
                <li>من خلال تطبيقات الهاتف المحمول والكمبيوتر المكتبي التي تقوم بتنزيلها من هذه المنصة، والتي توفر تفاعلاً مخصصاً غير مستند إلى المتصفح بينك وبين هذه المنصة.</li>
                <li>عند تفاعلك مع إعلاناتنا وتطبيقاتنا على مواقع الويب والخدمات التابعة لجهات خارجية، إذا كانت هذه التطبيقات أو الإعلانات تتضمن روابط لهذه السياسة.</li>
              </ul>

              <p className="mb-4">لا تنطبق هذه السياسة على المعلومات التي يتم جمعها بواسطة:</p>
              <ul className="list-disc mr-6 mb-4">
                <li>أي طرف ثالث (بما في ذلك الشركات التابعة لنا وغير التابعة)، بما في ذلك من خلال أي تطبيق أو محتوى (بما في ذلك الإعلانات) قد يرتبط بالمنصة أو يمكن الوصول إليه منها.</li>
              </ul>

              <p className="mb-6">
                يرجى قراءة هذه السياسة بعناية لفهم سياساتنا وممارساتنا المتعلقة بمعلوماتك وكيف سنتعامل معها. إذا كنت لا توافق على سياساتنا وممارساتنا، فإن خيارك هو عدم استخدام منصتنا. من خلال الوصول إلى هذه المنصة أو استخدامها، فإنك توافق على سياسة الخصوصية هذه. قد تتغير هذه السياسة من وقت لآخر (انظر التغييرات على سياسة الخصوصية لدينا). يعتبر استمرارك في استخدام هذه المنصة بعد إجراء التغييرات بمثابة قبول لتلك التغييرات، لذا يرجى مراجعة السياسة بشكل دوري للحصول على التحديثات.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. المعلومات التي نجمعها عنك وكيف نجمعها</h2>
              <p className="mb-4">
                نجمع عدة أنواع من المعلومات من وعن مستخدمي منصتنا، بما في ذلك المعلومات:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>التي يمكن من خلالها تحديد هويتك الشخصية، مثل الاسم، العنوان البريدي، عنوان البريد الإلكتروني، رقم الهاتف، رقم الهوية الوطنية/الإقامة، معلومات الدفع (مثل تفاصيل بطاقة الائتمان أو الحساب المصرفي)، أو أي معرف آخر يمكن من خلاله الاتصال بك عبر الإنترنت أو خارجه ("المعلومات الشخصية").</li>
                <li>التي تتعلق بك ولكن لا تحدد هويتك بشكل فردي، مثل معلومات الموقع الجغرافي، نوع الجهاز، نظام التشغيل، معلومات استخدام التطبيق.</li>
                <li>حول اتصالك بالإنترنت، والمعدات التي تستخدمها للوصول إلى منصتنا، وتفاصيل الاستخدام.</li>
              </ul>

              <p className="mb-4">نجمع هذه المعلومات:</p>
              <ul className="list-disc mr-6 mb-4">
                <li>مباشرة منك عندما تقدمها إلينا.</li>
                <li>تلقائياً أثناء تنقلك عبر المنصة. قد تتضمن المعلومات التي يتم جمعها تلقائياً تفاصيل الاستخدام، وعناوين IP، والمعلومات التي يتم جمعها من خلال ملفات تعريف الارتباط وتقنيات التتبع الأخرى.</li>
                <li>من أطراف ثالثة، على سبيل المثال، شركائنا التجاريين.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. المعلومات التي تقدمها إلينا:</h3>
              <p className="mb-4">قد تتضمن المعلومات التي نجمعها على منصتنا أو من خلالها ما يلي:</p>
              <ul className="list-disc mr-6 mb-4">
                <li>المعلومات التي تقدمها عن طريق ملء النماذج على منصتنا. يتضمن ذلك المعلومات المقدمة وقت التسجيل لاستخدام منصتنا، أو الاشتراك في خدمتنا، أو نشر المواد، أو طلب خدمات إضافية. قد نطلب منك أيضاً معلومات عندما تشارك في مسابقة أو عرض ترويجي نرعاه، وعندما تبلغ عن مشكلة في منصتنا.</li>
                <li>سجلات ونسخ مراسلاتك (بما في ذلك عناوين البريد الإلكتروني)، إذا اتصلت بنا.</li>
                <li>ردودك على الاستبيانات التي قد نطلب منك إكمالها لأغراض البحث.</li>
                <li>تفاصيل المعاملات التي تجريها من خلال منصتنا وتلبية طلباتك. قد يُطلب منك تقديم معلومات مالية قبل تقديم طلب من خلال منصتنا.</li>
                <li>استعلامات البحث الخاصة بك على المنصة.</li>
              </ul>

              <p className="mb-4">
                قد تقدم أيضاً معلومات ليتم نشرها أو عرضها (يشار إليها فيما بعد بـ "المنشورة") في المناطق العامة من المنصة، أو نقلها إلى مستخدمين آخرين للمنصة أو أطراف ثالثة (يشار إليها مجتمعة بـ "مساهمات المستخدم"). يتم نشر مساهمات المستخدم الخاصة بك ونقلها إليك على مسؤوليتك الخاصة. على الرغم من أننا قد نسمح لك بتعيين إعدادات خصوصية معينة لهذه المعلومات عن طريق تسجيل الدخول إلى ملف تعريف حسابك، يرجى العلم أنه لا توجد تدابير أمنية مثالية أو غير قابلة للاختراق. بالإضافة إلى ذلك، لا يمكننا التحكم في تصرفات المستخدمين الآخرين للمنصة الذين قد تختار مشاركة مساهمات المستخدم الخاصة بك معهم. لذلك، لا يمكننا ولا نضمن أن مساهمات المستخدم الخاصة بك لن يتم عرضها من قبل أشخاص غير مصرح لهم.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. المعلومات التي نجمعها من خلال تقنيات جمع البيانات التلقائية:</h3>
              <p className="mb-4">
                أثناء تنقلك عبر منصتنا وتفاعلك معها، قد نستخدم تقنيات جمع البيانات التلقائية لجمع معلومات معينة حول معداتك، وإجراءات التصفح، والأنماط، بما في ذلك:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>تفاصيل زياراتك إلى منصتنا، بما في ذلك بيانات حركة المرور، وبيانات الموقع، والسجلات، وبيانات الاتصال الأخرى، والموارد التي تصل إليها وتستخدمها على المنصة.</li>
                <li>معلومات حول جهاز الكمبيوتر الخاص بك واتصالك بالإنترنت، بما في ذلك عنوان IP الخاص بك، ونظام التشغيل، ونوع المتصفح.</li>
              </ul>

              <p className="mb-4">
                المعلومات التي نجمعها تلقائياً هي بيانات إحصائية ولا تتضمن معلومات شخصية، ولكن قد نحتفظ بها أو نربطها بالمعلومات الشخصية التي نجمعها بطرق أخرى أو نتلقاها من أطراف ثالثة. تساعدنا على تحسين منصتنا وتقديم خدمة أفضل وأكثر تخصيصاً من خلال تمكيننا من:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>تقدير حجم جمهورنا وأنماط الاستخدام.</li>
                <li>تخزين معلومات حول تفضيلاتك، مما يسمح لنا بتخصيص منصتنا وفقاً لاهتماماتك الفردية.</li>
                <li>تسريع عمليات البحث الخاصة بك.</li>
                <li>التعرف عليك عند عودتك إلى منصتنا.</li>
              </ul>

              <p className="mb-4">قد تتضمن التقنيات التي نستخدمها لجمع البيانات التلقائي هذا ما يلي:</p>
              <ul className="mr-6 mb-4 space-y-3">
                <li><strong>ملفات تعريف الارتباط (أو ملفات تعريف الارتباط للمتصفح):</strong> ملف تعريف الارتباط هو ملف صغير يتم وضعه على القرص الصلب لجهاز الكمبيوتر الخاص بك. يمكنك رفض قبول ملفات تعريف الارتباط للمتصفح عن طريق تفعيل الإعداد المناسب في متصفحك. ومع ذلك، إذا حددت هذا الإعداد، فقد لا تتمكن من الوصول إلى أجزاء معينة من منصتنا. ما لم تقم بتعديل إعدادات متصفحك بحيث يرفض ملفات تعريف الارتباط، سيصدر نظامنا ملفات تعريف الارتباط عندما توجه متصفحك إلى منصتنا.</li>
                <li><strong>إشارات الويب:</strong> قد تحتوي صفحات منصتنا ورسائل البريد الإلكتروني الخاصة بنا على ملفات إلكترونية صغيرة تعرف باسم إشارات الويب (يشار إليها أيضاً باسم صور GIF الشفافة، وعلامات البكسل، وصور GIF أحادية البكسل) التي تسمح للشركة، على سبيل المثال، بحساب المستخدمين الذين زاروا تلك الصفحات أو فتحوا بريداً إلكترونياً ولإحصائيات موقع الويب الأخرى ذات الصلة (على سبيل المثال، تسجيل شعبية محتوى موقع الويب المعين والتحقق من سلامة النظام والخادم).</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. استخدام الكاميرا:</h3>
              <p className="mb-4">
                قد يطلب تطبيق أراكني الإذن بالوصول إلى كاميرا جهازك. يستخدم هذا الإذن حصرياً للأغراض التالية:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li><strong>تحميل صور الملف الشخصي:</strong> للسماح لك بالتقاط صورة مباشرة لاستخدامها كصورة ملفك الشخصي داخل التطبيق.</li>
                <li><strong>تحميل صور المنتج/المعدات:</strong> لتمكين المؤجرين من التقاط صور للمعدات التي يرغبون في عرضها للإيجار وتحميلها مباشرة إلى قوائم منتجاتهم.</li>
                <li><strong>التحقق من الهوية:</strong> في بعض الحالات، قد نطلب منك التقاط صور لوثائق الهوية لأغراض التحقق من الحساب والأمان، مما يضمن بيئة آمنة وموثوقة لجميع المستخدمين.</li>
              </ul>

              <p className="mb-4">
                لا نصل إلى كاميرتك أو نستخدمها لأي غرض آخر غير تلك المذكورة صراحة أعلاه. لا يتم تخزين أي صور أو مقاطع فيديو تم التقاطها باستخدام الكاميرا ما لم تقم بتحميلها صراحة إلى التطبيق كجزء من وظيفة التطبيق (مثل صور الملف الشخصي أو صور المنتج). يتم التعامل مع جميع البيانات التي يتم جمعها عبر الكاميرا وفقاً لسياسة الخصوصية هذه ومعايير أمان البيانات الصارمة لدينا.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4. المحتوى المقدم من المستخدم (الصور والوسائط):</h3>
              <p className="mb-4">
                قد تسمح لك منصتنا بتحميل أو نشر صور أو مقاطع فيديو أو وسائط أخرى كجزء من مساهمات المستخدم، مثل مراجعات المنتجات، أو التعليقات، أو الإبلاغ عن المشكلات المتعلقة بالعناصر المستأجرة (مثل العناصر المعيبة أو التالفة). عند تقديم هذا المحتوى، فإنك توافق على أن هذه الصور أو الوسائط قد يتم جمعها وتخزينها وعرضها من قبلنا، وقد تكون مرئية للمستخدمين الآخرين أو للجمهور، اعتماداً على إعدادات الخصوصية للميزة التي تستخدمها. نستخدم هذا المحتوى لتحسين خدماتنا، ومعالجة الشكاوى، وعرض المراجعات، والتحقق من دقة المعلومات المقدمة. أنت مسؤول عن ضمان أن أي محتوى تقدمه يلتزم بشروط الاستخدام الخاصة بنا ولا ينتهك حقوق أي طرف ثالث. يتم التعامل مع جميع الصور والوسائط المقدمة من المستخدم وفقاً لسياسة الخصوصية هذه ومعايير أمان البيانات لدينا.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.5. بيانات الموقع الجغرافي:</h3>
              <p className="mb-4">
                قد يطلب تطبيق أراكني الإذن بالوصول إلى بيانات الموقع الجغرافي لجهازك. تستخدم هذه البيانات للأغراض التالية:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li><strong>تحديد أقرب المؤجرين:</strong> لتمكيننا من عرض المؤجرين ومنتجات الإيجار الأقرب إلى موقعك، مما يسهل عليك العثور على ما تحتاجه بسرعة وكفاءة.</li>
                <li><strong>الترويج للمؤجرين والإعلانات:</strong> قد نستخدم بيانات موقعك لتقديم إعلانات وعروض ترويجية مخصصة من المؤجرين القريبين، بهدف تعزيز تجربتك على المنصة وتزويدك بالخدمات ذات الصلة.</li>
              </ul>

              <p className="mb-4">
                يتم جمع بيانات الموقع الجغرافي بموافقتك الصريحة، ويمكنك تعطيل هذه الميزة في أي وقت من إعدادات جهازك. يتم التعامل مع جميع بيانات الموقع الجغرافي وفقاً لسياسة الخصوصية هذه ومعايير أمان البيانات الصارمة لدينا.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. كيف نستخدم معلوماتك</h2>
              <p className="mb-4">
                نستخدم المعلومات التي نجمعها عنك أو التي تقدمها إلينا، بما في ذلك أي معلومات شخصية:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>لعرض منصتنا ومحتوياتها لك.</li>
                <li>لتزويدك بالمعلومات أو المنتجات أو الخدمات التي تطلبها منا.</li>
                <li>لتحقيق أي غرض آخر تقدمه من أجله.</li>
                <li>لتزويدك بإشعارات حول حسابك/اشتراكك، بما في ذلك إشعارات انتهاء الصلاحية والتجديد.</li>
                <li>للقيام بالتزاماتنا وإنفاذ حقوقنا الناشئة عن أي عقود مبرمة بينك وبيننا، بما في ذلك لأغراض الفواتير والتحصيل.</li>
                <li>لإبلاغك بالتغييرات على منصتنا أو أي منتجات أو خدمات نقدمها أو نوفرها من خلالها.</li>
                <li>للسماح لك بالمشاركة في الميزات التفاعلية على منصتنا.</li>
                <li>بأي طريقة أخرى قد نصفها عند تقديم المعلومات.</li>
                <li>لأي غرض آخر بموافقتك.</li>
              </ul>

              <p className="mb-4">
                قد نستخدم معلوماتك أيضاً للاتصال بك بخصوص سلع وخدمات خاصة بنا أو بأطراف ثالثة قد تهمك. إذا كنت لا ترغب في أن تستخدم شركتنا معلومات الاتصال الخاصة بك بهذه الطريقة، يرجى تعديل تفضيلات المستخدم الخاصة بك في ملف تعريف حسابك.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. الكشف عن معلوماتك</h2>
              <p className="mb-4">
                قد نكشف عن معلومات مجمعة حول مستخدمينا، ومعلومات لا تحدد هوية أي فرد، دون قيود. قد نكشف عن المعلومات الشخصية التي نجمعها أو التي تقدمها كما هو موضح في سياسة الخصوصية هذه:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li>للشركات التابعة لنا والشركات الشقيقة.</li>
                <li>للمقاولين ومقدمي الخدمات والأطراف الثالثة الأخرى التي نستخدمها لدعم أعمالنا والذين يلتزمون بالتزامات تعاقدية للحفاظ على سرية المعلومات الشخصية واستخدامها فقط للأغراض التي نكشفها لهم من أجلها.</li>
                <li>لمشترٍ أو خلف آخر في حالة الاندماج، أو التصفية، أو إعادة الهيكلة، أو إعادة التنظيم، أو الحل، أو أي بيع أو نقل آخر لبعض أو كل أصول شركة أراكني للتقنية، سواء كمنشأة مستمرة أو كجزء من إفلاس، أو تصفية، أو إجراء مماثل، حيث تكون المعلومات الشخصية التي تحتفظ بها شركة أراكني للتقنية حول مستخدمي منصتنا من بين الأصول المنقولة.</li>
                <li>لتحقيق الغرض الذي تقدمه من أجله.</li>
                <li>لأي غرض آخر نكشف عنه عند تقديم المعلومات.</li>
                <li>بموافقتك.</li>
              </ul>

              <p className="mb-4">قد نكشف أيضاً عن معلوماتك الشخصية:</p>
              <ul className="list-disc mr-6 mb-4">
                <li>للامتثال لأي أمر محكمة، أو قانون، أو عملية قانونية، بما في ذلك الاستجابة لأي طلب حكومي أو تنظيمي.</li>
                <li>لإنفاذ أو تطبيق شروط الاستخدام والاتفاقيات الأخرى الخاصة بنا، بما في ذلك لأغراض الفواتير والتحصيل.</li>
                <li>إذا اعتقدنا أن الكشف ضروري أو مناسب لحماية حقوق، أو ممتلكات، أو سلامة شركة أراكني للتقنية، أو عملائنا، أو الآخرين. يتضمن ذلك تبادل المعلومات مع الشركات والمنظمات الأخرى لأغراض حماية الاحتيال وتقليل مخاطر الائتمان.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. خيارات حول كيفية استخدامنا لمعلوماتك والكشف عنها</h2>
              <p className="mb-4">
                نسعى جاهدين لتزويدك بخيارات فيما يتعلق بالمعلومات الشخصية التي تقدمها إلينا. لقد أنشأنا آليات لتزويدك بالتحكم التالي في معلوماتك:
              </p>
              <ul className="list-disc mr-6 mb-4">
                <li><strong>تقنيات التتبع والإعلان:</strong> يمكنك تعيين متصفحك لرفض جميع ملفات تعريف الارتباط أو بعضها، أو لتنبيهك عند إرسال ملفات تعريف الارتباط. إذا قمت بتعطيل ملفات تعريف الارتباط أو رفضتها، يرجى ملاحظة أن بعض أجزاء هذه المنصة قد تصبح غير قابلة للوصول أو لا تعمل بشكل صحيح.</li>
                <li><strong>العروض الترويجية من الشركة:</strong> إذا كنت لا ترغب في أن تستخدم شركتنا معلومات الاتصال الخاصة بك للترويج لمنتجاتنا أو خدماتنا أو منتجات أو خدمات أطراف ثالثة، يمكنك إلغاء الاشتراك عن طريق تعديل تفضيلات المستخدم الخاصة بك في ملف تعريف حسابك.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. الوصول إلى معلوماتك وتصحيحها</h2>
              <p className="mb-4">
                يمكنك مراجعة معلوماتك الشخصية وتغييرها عن طريق تسجيل الدخول إلى المنصة وزيارة صفحة ملف تعريف حسابك. يمكنك أيضاً إرسال بريد إلكتروني إلينا على support@arakne.com.sa لطلب الوصول إلى أي معلومات شخصية قدمتها إلينا أو تصحيحها أو حذفها. لا يمكننا حذف معلوماتك الشخصية إلا عن طريق حذف حساب المستخدم الخاص بك أيضاً. قد لا نلبي طلباً لتغيير المعلومات إذا اعتقدنا أن التغيير سينتهك أي قانون أو متطلب قانوني أو يتسبب في أن تكون المعلومات غير صحيحة. إذا قمت بحذف مساهمات المستخدم الخاصة بك من المنصة، فقد تظل نسخ من مساهمات المستخدم الخاصة بك قابلة للعرض في الصفحات المخزنة مؤقتاً والمؤرشفة، أو قد تكون قد تم نسخها أو تخزينها بواسطة مستخدمين آخرين للمنصة.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. أمن البيانات</h2>
              <p className="mb-4">
                لقد قمنا بتطبيق تدابير مصممة لتأمين معلوماتك الشخصية من الفقدان العرضي ومن الوصول غير المصرح به، أو الاستخدام، أو التغيير، أو الكشف. يتم تخزين جميع المعلومات التي تقدمها إلينا على خوادمنا الآمنة خلف جدران الحماية. سيتم تشفير أي معاملات دفع باستخدام تقنية SSL.
              </p>

              <p className="mb-4">
                تعتمد سلامة وأمن معلوماتك أيضاً عليك. حيثما قدمنا لك (أو حيثما اخترت) كلمة مرور للوصول إلى أجزاء معينة من منصتنا، فأنت مسؤول عن الحفاظ على سرية كلمة المرور هذه. نطلب منك عدم مشاركة كلمة المرور الخاصة بك مع أي شخص.
              </p>

              <p className="mb-4">
                لسوء الحظ، فإن نقل المعلومات عبر الإنترنت ليس آمناً تماماً. على الرغم من أننا نبذل قصارى جهدنا لحماية معلوماتك الشخصية، لا يمكننا ضمان أمان معلوماتك الشخصية المنقولة إلى منصتنا. أي نقل للمعلومات الشخصية يكون على مسؤوليتك الخاصة. نحن لسنا مسؤولين عن التحايل على أي إعدادات خصوصية أو تدابير أمنية موجودة على المنصة.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. التغييرات على سياسة الخصوصية لدينا</h2>
              <p className="mb-4">
                سياستنا هي نشر أي تغييرات نجريها على سياسة الخصوصية هذه على هذه الصفحة. إذا أجرينا تغييرات جوهرية على كيفية تعاملنا مع المعلومات الشخصية لمستخدمينا، فسنبلغك من خلال إشعار على الصفحة الرئيسية للمنصة. يتم تحديد تاريخ آخر مراجعة لسياسة الخصوصية في أعلى الصفحة. أنت مسؤول عن زيارة منصتنا وسياسة الخصوصية هذه بشكل دوري للتحقق من أي تغييرات.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. معلومات الاتصال</h2>
              <p className="mb-2">لطرح الأسئلة أو التعليق على سياسة الخصوصية هذه وممارسات الخصوصية لدينا، اتصل بنا على:</p>
              <ul className="list-disc mr-6 mb-4">
                <li>البريد الإلكتروني: support@arakne.com.sa</li>
                <li>الهاتف: +966595500900</li>
                <li>ساعات العمل: الأحد إلى الخميس، من 9:00 صباحاً إلى 5:00 مساءً (بتوقيت السعودية)</li>
                <li>العنوان: الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
        )}

        {/* English Content */}
        {language === 'en' && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Arakne Platform Privacy Policy</h1>
              <p className="text-lg text-gray-600 mb-8">Effective Date: September 23, 2025</p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Welcome to the Arakne Platform Privacy Policy. At Arakne, we are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your personal information when you use the Arakne platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit or use the Arakne platform, and our practices for collecting, using, retaining, protecting, and disclosing this information. This policy applies to information we collect:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>On this platform.</li>
                <li>In email, text, and other electronic messages between you and this platform.</li>
                <li>Through mobile and desktop applications you download from this platform, which provide dedicated non-browser-based interaction between you and this platform.</li>
                <li>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</li>
              </ul>

              <p className="mb-4">This policy does not apply to information collected by:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Any third party (including our affiliates and non-affiliates), including through any application or content (including advertising) that may link to or be accessible from the platform.</li>
              </ul>

              <p className="mb-6">
                Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our platform. By accessing or using this platform, you agree to this Privacy Policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of this platform after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect About You and How We Collect It</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our platform, including information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>By which you may be personally identified, such as name, postal address, email address, telephone number, national ID/residency number, payment information (e.g., credit card or bank account details), or any other identifier by which you may be contacted online or offline ("Personal Information").</li>
                <li>That is about you but individually does not identify you, such as geolocation information, device type, operating system, application usage information.</li>
                <li>About your internet connection, the equipment you use to access our platform, and usage details.</li>
              </ul>

              <p className="mb-4">We collect this information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Directly from you when you provide it to us.</li>
                <li>Automatically as you navigate through the platform. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
                <li>From third parties, for example, our business partners.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. Information You Provide to Us:</h3>
              <p className="mb-4">The information we collect on or through our platform may include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Information that you provide by filling in forms on our platform. This includes information provided at the time of registering to use our platform, subscribing to our service, posting material, or requesting further services. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our platform.</li>
                <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
                <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                <li>Details of transactions you carry out through our platform and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our platform.</li>
                <li>Your search queries on the platform.</li>
              </ul>

              <p className="mb-4">
                You also may provide information to be published or displayed (hereinafter, "posted") on public areas of the platform, or transmitted to other users of the platform or third parties (collectively, "User Contributions"). Your User Contributions are posted and transmitted to you at your own risk. Although we may allow you to set certain privacy settings for such information by logging into your account profile, please be aware that no security measures are perfect or impenetrable. Additionally, we cannot control the actions of other users of the platform with whom you may choose to share your User Contributions. Therefore, we cannot and do not guarantee that your User Contributions will not be viewed by unauthorized persons.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. Information We Collect Through Automatic Data Collection Technologies:</h3>
              <p className="mb-4">
                As you navigate through and interact with our platform, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Details of your visits to our platform, including traffic data, location data, logs, and other communication data and the resources that you access and use on the platform.</li>
                <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
              </ul>

              <p className="mb-4">
                The information we collect automatically is statistical data and does not include personal information, but we may maintain it or associate it with personal information we collect in other ways or receive from third parties. It helps us to improve our platform and to deliver a better and more personalized service by enabling us to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Estimate our audience size and usage patterns.</li>
                <li>Store information about your preferences, allowing us to customize our platform according to your individual interests.</li>
                <li>Speed up your searches.</li>
                <li>Recognize you when you return to our platform.</li>
              </ul>

              <p className="mb-4">The technologies we use for this automatic data collection may include:</p>
              <ul className="pl-6 mb-4 space-y-3">
                <li><strong>Cookies (or browser cookies):</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our platform. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our platform.</li>
                <li><strong>Web Beacons:</strong> Pages of our platform and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. Camera Usage:</h3>
              <p className="mb-4">
                The Arakne application may request permission to access your device's camera. This permission is used exclusively for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Profile Picture Upload:</strong> To allow you to take a live photo for use as your profile picture within the application.</li>
                <li><strong>Product/Equipment Photo Upload:</strong> To enable Lessors to take photos of equipment they wish to list for rent and upload them directly to their product listings.</li>
                <li><strong>Identity Verification:</strong> In some cases, we may require you to take photos of identification documents for account verification and security purposes, ensuring a safe and reliable environment for all users.</li>
              </ul>

              <p className="mb-4">
                We do not access or use your camera for any purpose other than those explicitly stated above. No photos or videos taken with the camera are stored unless you explicitly upload them to the application as part of an application function (such as profile pictures or product photos). All data collected via the camera is handled in accordance with this Privacy Policy and our strict data security standards.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.4. User-Provided Content (Photos and Media):</h3>
              <p className="mb-4">
                Our platform may allow you to upload or post photos, videos, or other media as part of User Contributions, such as product reviews, comments, or reporting issues related to rented items (e.g., defective or damaged items). When you submit such content, you agree that these photos or media may be collected, stored, and displayed by us, and may be visible to other users or the public, depending on the privacy settings of the feature you are using. We use this content to improve our services, address complaints, display reviews, and verify the accuracy of information provided. You are responsible for ensuring that any content you provide adheres to our Terms of Use and does not infringe on the rights of any third party. All user-provided photos and media are handled in accordance with this Privacy Policy and our data security standards.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.5. Geolocation Data:</h3>
              <p className="mb-4">
                The Arakne application may request permission to access your device's geolocation data. This data is used for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Identifying Nearest Lessors:</strong> To enable us to display Lessors and rental products closest to your location, making it easier for you to find what you need quickly and efficiently.</li>
                <li><strong>Promoting Lessors and Advertisements:</strong> We may use your location data to provide personalized advertisements and promotions from nearby Lessors, aiming to enhance your platform experience and provide you with relevant services.</li>
              </ul>

              <p className="mb-4">
                Geolocation data is collected with your explicit consent, and you can disable this feature at any time from your device settings. All geolocation data is handled in accordance with this Privacy Policy and our strict data security standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use information that we collect about you or that you provide to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To present our platform and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To provide you with notices about your account/subscription, including expiration and renewal notices.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.</li>
                <li>To notify you about changes to our platform or any products or services we offer or provide through it.</li>
                <li>To allow you to participate in interactive features on our platform.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>

              <p className="mb-4">
                We may also use your information to contact you about our own and third-parties' goods and services that may be of interest to you. If you do not want us to use your contact information in this way, please adjust your user preferences in your account profile.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>To our subsidiaries and affiliates.</li>
                <li>To contractors, service providers, and other third parties we use to support our business and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Arakne Technology Company's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by Arakne Technology Company about our platform users is among the assets transferred.</li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
              </ul>

              <p className="mb-4">We may also disclose your personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
                <li>To enforce or apply our Terms of Use and other agreements, including for billing and collection purposes.</li>
                <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Arakne Technology Company, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Choices About How We Use and Disclose Your Information</h2>
              <p className="mb-4">
                We strive to provide you with choices regarding the personal information you provide to us. We have created mechanisms to provide you with the following control over your information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Tracking Technologies and Advertising:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this platform may then be inaccessible or not function properly.</li>
                <li><strong>Promotional Offers from the Company:</strong> If you do not wish to have our Company use your contact information to promote our own or third parties' products or services, you can opt-out by adjusting your user preferences in your account profile.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Accessing and Correcting Your Information</h2>
              <p className="mb-4">
                You can review and change your personal information by logging into the platform and visiting your account profile page. You may also send us an email at support@arakne.com.sa to request access to, correct, or delete any personal information that you have provided to us. We cannot delete your personal information except by also deleting your user account. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or cause the information to be incorrect. If you delete your User Contributions from the platform, copies of your User Contributions may remain viewable in cached and archived pages, or might have been copied or stored by other platform users.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="mb-4">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on our secure servers behind firewalls. Any payment transactions will be encrypted using SSL technology.
              </p>

              <p className="mb-4">
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our platform, you are responsible for keeping this password confidential. We ask you not to share your password with anyone.
              </p>

              <p className="mb-4">
                Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our platform. Any transmission of personal information is at your own risk. We are not responsible for circumvention of any privacy settings or security measures contained on the platform.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Our Privacy Policy</h2>
              <p className="mb-4">
                It is our policy to post any changes we make to our Privacy Policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the platform home page. The date the Privacy Policy was last revised is identified at the top of the page. You are responsible for periodically visiting our platform and this Privacy Policy to check for any changes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="mb-2">To ask questions or comment about this Privacy Policy and our privacy practices, contact us at:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Email: support@arakne.com.sa</li>
                <li>Phone: +966595500900</li>
                <li>Working Hours: Sunday to Thursday, 9:00 AM to 5:00 PM (Saudi Time)</li>
                <li>Address: Riyadh, Kingdom of Saudi Arabia</li>
              </ul>
            </div>
          </div>
        )}

        
        {/* Footer */}
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm">
            © 2025 ARAKNE Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy