import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, FileText, Users, Shield, CreditCard, AlertTriangle, Scale, Globe, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function TermsOfService() {
  const [language, setLanguage] = useState('ar')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-2 text-white">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">Terms of Service</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            ARAKNE Platform - Comprehensive Terms and Conditions
          </p>
          <p className="text-lg opacity-80 mt-4">
            Last updated: September 23, 2025
          </p>
        </div>
      </div>

      {/* Language Toggle */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
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
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8" dir="rtl">
              <div className="prose prose-lg max-w-none text-right">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">شروط وأحكام منصة أراكني</h1>
                <p className="text-lg text-gray-600 mb-8">تاريخ السريان: 23 سبتمبر 2025</p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  مرحباً بكم في منصة أراكني. يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام المنصة.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. مقدمة ومعلومات الشركة</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1. عن أراكني</h3>
                <p className="mb-4">
                  تحكم شروط الاستخدام هذه وصولك إلى واستخدامك لمنصة أراكني، التي تملكها وتديرها شركة أراكني للتقنية (Arakne Technology Company).
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">معلومات الشركة:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• اسم الشركة: شركة أراكني للتقنية</li>
                    <li>• السجل التجاري: 7050413611</li>
                    <li>• العنوان: الرياض، المملكة العربية السعودية</li>
                    <li>• البريد الإلكتروني: support@arakne.com.sa</li>
                    <li>• الهاتف: +966595500900</li>
                    <li>• ساعات العمل: الأحد إلى الخميس، من 9:00 صباحاً إلى 5:00 مساءً (بتوقيت السعودية)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2. نظرة عامة على الخدمة</h3>
                <p className="mb-4">
                  أراكني هي منصة إلكترونية تربط مالكي المعدات (المؤجرين) بالأفراد والشركات التي تحتاج إلى استئجار المعدات (المستأجرين) لفترات قصيرة، مع التركيز في البداية على معدات الفعاليات والرياضة في الرياض.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3. قبول الشروط</h3>
                <p className="mb-6">
                  باستخدامك لمنصة أراكني، فإنك توافق على هذه الشروط. إذا كنت لا توافق، يرجى عدم استخدام منصتنا. هذه الشروط متوافقة مع القوانين السعودية.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. الأهلية والتسجيل</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. متطلبات العمر والأهلية</h3>
                <ul className="list-disc mr-6 mb-4">
                  <li>يجب أن لا يقل عمرك عن 18 عاماً.</li>
                  <li>يجب أن تكون لديك الأهلية القانونية لإبرام العقود.</li>
                  <li>يجب عليك الامتثال لجميع القوانين السعودية المعمول بها.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. تسجيل الحساب</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">للمستأجرين (تسجيل مجاني):</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• تقديم معلومات شخصية دقيقة (الاسم، رقم الهاتف، البريد الإلكتروني).</li>
                      <li>• إكمال التحقق من الهوية (نفاذ عند توفره، أو تحقق بديل).</li>
                      <li>• تحميل صورة شخصية للملف الشخصي.</li>
                      <li>• الموافقة على هذه الشروط.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">للمؤجرين (عمولة فقط - لا يوجد اشتراك مدفوع):</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• رقم سجل تجاري سعودي ساري المفعول (للشركات) أو هوية وطنية سعودية (للأفراد).</li>
                      <li>• إكمال عملية التحقق من العمل/الشخصية.</li>
                      <li>• الامتثال لجميع متطلبات المؤجر الموضحة في القسم 7.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. أمن الحساب</h3>
                <ul className="list-disc mr-6 mb-6">
                  <li>حافظ على كلمة مرورك آمنة وسرية.</li>
                  <li>أبلغنا فوراً بأي وصول غير مصرح به.</li>
                  <li>أنت مسؤول عن جميع الأنشطة التي تتم تحت حسابك.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. كيفية عمل أراكني</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1. دورنا</h3>
                <p className="mb-4">
                  تعمل أراكني كمنصة وسيطة تربط المؤجرين بالمستأجرين. نحن نقدم التكنولوجيا ونسهل الاتصالات، ولكننا لسنا طرفاً في اتفاقيات الإيجار بين المستخدمين.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2. عملية الحجز</h3>
                <ul className="list-disc mr-6 mb-4">
                  <li>يقدم المستأجر طلب إيجار مع التواريخ والمتطلبات.</li>
                  <li>يقوم المؤجر بمراجعة الطلب والرد (قبول/رفض) خلال فترة زمنية معقولة.</li>
                  <li>عند القبول، يدفع المستأجر عبر منصتنا.</li>
                  <li>يقوم الطرفان بتنسيق تفاصيل الاستلام/التسليم.</li>
                  <li>تبدأ فترة الإيجار كما هو متفق عليه.</li>
                  <li>إعادة المعدات وإطلاق الوديعة (إن وجدت).</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3. معالجة الدفع</h3>
                <ul className="list-disc mr-6 mb-6">
                  <li>تتم معالجة جميع المدفوعات عبر معالجات دفع آمنة تابعة لجهات خارجية.</li>
                  <li>تحصل أراكني على عمولة من الإيجارات الناجحة فقط (لا توجد رسوم اشتراك).</li>
                  <li>يتم الاحتفاظ بمبالغ الوديعة (إذا طلبها المؤجر) بشكل آمن ويتم إطلاقها بناءً على حالة المعدات.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. التسليم والأداء</h2>
                <p className="mb-4">إذا تأخر المؤجر في التسليم عن التاريخ المتفق عليه، يجوز لك:</p>
                <ul className="list-disc mr-6 mb-6">
                  <li>إلغاء الإيجار واسترداد المبلغ بالكامل إذا كان التأخير يجعل المعدات غير صالحة للغرض المقصود (مثل تجاوز تاريخ الفعالية).</li>
                  <li>المطالبة بتكاليف إضافية تكبدتها بسبب التأخير، مع مراعاة طبيعة الإيجار (مثل معدات الفعاليات).</li>
                  <li>تُستثنى حالات القوة القاهرة.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. قواعد المنصة والأنشطة المحظورة</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1. الاستخدام المقبول</h3>
                <ul className="list-disc mr-6 mb-4">
                  <li>استخدام المنصة بشكل قانوني وبحسن نية.</li>
                  <li>تقديم معلومات دقيقة.</li>
                  <li>احترام حقوق وممتلكات المستخدمين الآخرين.</li>
                  <li>إجراء جميع الاتصالات الأولية عبر منصتنا.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2. الأنشطة المحظورة</h3>
                <ul className="list-disc mr-6 mb-4">
                  <li>إنشاء حسابات وهمية أو تقديم معلومات خاطئة.</li>
                  <li>التحايل على هيكل الرسوم لدينا عن طريق ترتيب صفقات مباشرة بعد الالتقاء عبر أراكني.</li>
                  <li>نشر محتوى غير لائق أو مسيء أو غير قانوني.</li>
                  <li>إلحاق الضرر بمنصتنا أو اختراقها أو إساءة استخدامها.</li>
                  <li>انتهاك القوانين السعودية.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3. التحايل على الرسوم</h3>
                <p className="mb-4">يُحظر على المستخدمين ترتيب اتفاقيات إيجار مباشرة خارج أراكني بعد التواصل عبر منصتنا. تؤدي الانتهاكات إلى:</p>
                <ul className="list-disc mr-6 mb-6">
                  <li>تحذير للمخالفة الأولى.</li>
                  <li>تعليق الحساب للمخالفات المتكررة.</li>
                  <li>غرامات تعادل رسوم العمولة التي تم تجنبها.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">20. سياسة الإلغاء والاسترداد</h2>
                <ul className="list-disc mr-6 mb-4">
                  <li>يمكن للمستأجر إلغاء حجزه مجاناً حتى 24 ساعة قبل تاريخ الفعالية، ما لم يحدد المؤجر سياسة إلغاء مختلفة بوضوح في قائمة المعدات الخاصة به.</li>
                  <li>الإلغاءات في نفس اليوم (تاريخ الفعالية) غير مؤهلة للاسترداد، باستثناء الحالات التي يغطيها القسم 20.6 (عدم استلام البضاعة).</li>
                  <li>لا يمكن إلغاء العناصر المخصصة (مثل الزينة الشخصية، أو اللافتات المخصصة، أو المعدات المطلوبة خصيصاً) بمجرد بدء الإنتاج.</li>
                  <li>ستتم معالجة جميع المبالغ المستردة في غضون (3) أيام عمل للإلغاءات التي تتم قبل أكثر من 48 ساعة من الفعالية.</li>
                  <li>عمولة منصة أراكني غير قابلة للاسترداد في جميع سيناريوهات الإلغاء.</li>
                  <li>إذا أكد المستأجر عدم استلام البضاعة، فسيتم استرداد المبلغ بالكامل بغض النظر عن التوقيت.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">معلومات الاتصال</h2>
                <p className="mb-2">للاستفسارات أو الدعم أو الشكاوى:</p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">شركة أراكني للتقنية</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• البريد الإلكتروني: support@arakne.com.sa</li>
                    <li>• الهاتف: +966595500900</li>
                    <li>• العنوان: الرياض، المملكة العربية السعودية</li>
                    <li>• السجل التجاري: 7050413611</li>
                    <li>• ساعات العمل: الأحد إلى الخميس، من 9:00 صباحاً إلى 5:00 مساءً</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">أحكام ختامية</h2>
                <p className="mb-4"><strong>الاتفاق الكامل:</strong> تشكل هذه الشروط، جنباً إلى جنب مع سياسة الخصوصية لدينا، الاتفاق الكامل بينك وبين أراكني.</p>
                <p className="mb-4"><strong>التحديثات:</strong> قد نقوم بتحديث هذه الشروط مع نمو أعمالنا. تحقق بانتظام من التغييرات.</p>
                <p className="mb-4"><strong>اللغة:</strong> تم إعداد هذه الشروط باللغة العربية. في حالة التعارض مع النسخ المترجمة، تسود النسخة العربية.</p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">معلومات الوثيقة:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• الإصدار: 1.0</li>
                    <li>• تاريخ السريان: 23 سبتمبر 2025</li>
                    <li>• المراجعة التالية: [6 أشهر بعد الإطلاق]</li>
                    <li>• اللغة: العربية (الترجمة الإنجليزية متاحة عند الطلب)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* English Content */}
          {language === 'en' && (
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Arakne Platform Terms and Conditions</h1>
                <p className="text-lg text-gray-600 mb-8">Effective Date: September 23, 2025</p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Welcome to the Arakne platform. Please read these Terms and Conditions carefully before using the platform.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction and Company Information</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1. About Arakne</h3>
                <p className="mb-4">
                  These Terms of Use govern your access to and use of the Arakne platform, owned and operated by Arakne Technology Company.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Company Information:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Company Name: Arakne Technology Company</li>
                    <li>• Commercial Registration: 7050413611</li>
                    <li>• Address: Riyadh, Kingdom of Saudi Arabia</li>
                    <li>• Email: support@arakne.com.sa</li>
                    <li>• Phone: +966595500900</li>
                    <li>• Working Hours: Sunday to Thursday, 9:00 AM to 5:00 PM (Saudi Time)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2. Service Overview</h3>
                <p className="mb-4">
                  Arakne is an electronic platform that connects equipment owners (Lessors) with individuals and businesses that need to rent equipment (Lessees) for short periods, initially focusing on event and sports equipment in Riyadh.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">1.3. Acceptance of Terms</h3>
                <p className="mb-6">
                  By using the Arakne platform, you agree to these Terms. If you do not agree, please do not use our platform. These Terms are compliant with Saudi laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility and Registration</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1. Age and Eligibility Requirements</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>You must be at least 18 years old.</li>
                  <li>You must have the legal capacity to enter into contracts.</li>
                  <li>You must comply with all applicable Saudi laws.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2. Account Registration</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">For Lessees (Free Registration):</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Provide accurate personal information (name, phone number, email).</li>
                      <li>• Complete identity verification (Nafath when available, or alternative verification).</li>
                      <li>• Upload a personal profile picture.</li>
                      <li>• Agree to these Terms.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">For Lessors (Commission Only - No Paid Subscription):</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Valid Saudi Commercial Registration number (for companies) or Saudi National ID (for individuals).</li>
                      <li>• Complete business/personal verification process.</li>
                      <li>• Comply with all Lessor requirements outlined in Section 7.</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3. Account Security</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>Keep your password safe and confidential.</li>
                  <li>Notify us immediately of any unauthorized access.</li>
                  <li>You are responsible for all activities under your account.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How Arakne Works</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1. Our Role</h3>
                <p className="mb-4">
                  Arakne acts as an intermediary platform connecting Lessors with Lessees. We provide the technology and facilitate communications, but we are not a party to the rental agreements between users.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2. Booking Process</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Lessee submits a rental request with dates and requirements.</li>
                  <li>Lessor reviews the request and responds (accept/reject) within a reasonable timeframe.</li>
                  <li>Upon acceptance, Lessee pays through our platform.</li>
                  <li>Both parties coordinate pickup/delivery details.</li>
                  <li>The rental period begins as agreed.</li>
                  <li>Return of equipment and release of deposit (if any).</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3. Payment Processing</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>All payments are processed via secure third-party payment processors.</li>
                  <li>Arakne earns a commission only from successful rentals (no subscription fees).</li>
                  <li>Deposit amounts (if requested by the Lessor) are held securely and released based on equipment condition.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Consumer Rights</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Delivery and Performance</h3>
                <p className="mb-4">If the Lessor delays delivery beyond the agreed date, you may:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>Cancel the rental and receive a full refund if the delay renders the equipment unsuitable for its intended purpose (e.g., exceeding the event date).</li>
                  <li>Claim additional costs incurred due to the delay, considering the nature of the rental (e.g., event equipment).</li>
                  <li>Force majeure events are excluded.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Platform Rules and Prohibited Activities</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1. Acceptable Use</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Use the platform legally and in good faith.</li>
                  <li>Provide accurate information.</li>
                  <li>Respect the rights and property of other users.</li>
                  <li>Conduct all initial communications through our platform.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2. Prohibited Activities</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Creating fake accounts or providing false information.</li>
                  <li>Circumventing our fee structure by arranging direct deals after meeting through Arakne.</li>
                  <li>Posting inappropriate, offensive, or illegal content.</li>
                  <li>Harming, hacking, or misusing our platform.</li>
                  <li>Violating Saudi laws.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3. Fee Circumvention</h3>
                <p className="mb-4">Users are prohibited from arranging direct rental agreements outside Arakne after connecting through our platform. Violations lead to:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>A warning for the first offense.</li>
                  <li>Account suspension for repeated offenses.</li>
                  <li>Fines equivalent to the circumvented commission fees.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Cancellation and Refund Policy</h2>
                <ul className="list-disc pl-6 mb-4">
                  <li>A Lessee may cancel their booking for free up to 24 hours before the event date, unless the Lessor clearly specifies a different cancellation policy in their equipment listing.</li>
                  <li>Same-day cancellations (event date) are not eligible for a refund, except in cases covered by Section 20.6 (non-receipt of goods).</li>
                  <li>Customized items (e.g., personalized decorations, custom banners, specially ordered equipment) cannot be canceled once production has begun.</li>
                  <li>All refunds will be processed within three (3) business days for cancellations made more than 48 hours before the event.</li>
                  <li>Arakne platform commission is non-refundable in all cancellation scenarios.</li>
                  <li>If the Lessee confirms non-receipt of goods, a full refund will be issued regardless of timing.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="mb-2">For inquiries, support, or complaints:</p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Arakne Technology Company</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Email: support@arakne.com.sa</li>
                    <li>• Phone: +966595500900</li>
                    <li>• Address: Riyadh, Kingdom of Saudi Arabia</li>
                    <li>• Commercial Registration: 7050413611</li>
                    <li>• Working Hours: Sunday to Thursday, 9:00 AM to 5:00 PM</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Concluding Provisions</h2>
                <p className="mb-4"><strong>Entire Agreement:</strong> These Terms, along with our Privacy Policy, constitute the entire agreement between you and Arakne.</p>
                <p className="mb-4"><strong>Updates:</strong> We may update these Terms as our business grows. Check regularly for changes.</p>
                <p className="mb-4"><strong>Language:</strong> These Terms are prepared in Arabic. In case of conflict with translated versions, the Arabic version prevails.</p>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Document Information:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Version: 1.0</li>
                    <li>• Effective Date: September 23, 2025</li>
                    <li>• Next Review: [6 months after launch]</li>
                    <li>• Language: Arabic (English translation available upon request)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Agreement Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'الموافقة على الشروط' : 'Agreement to Terms'}
            </h3>
            <p className="mb-6 text-lg opacity-90">
              {language === 'ar' 
                ? 'باستخدام منصة أراكني، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام.'
                : 'By using the ARAKNE platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.'
              }
            </p>
            <Link to="/">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                {language === 'ar' ? 'أوافق والمتابعة' : 'I Agree and Continue'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService