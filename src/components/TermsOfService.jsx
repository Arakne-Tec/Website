import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function TermsOfService() {
  const [language, setLanguage] = useState('ar')
  const isArabic = language === 'ar'

  const content = {
    ar: {
      title: 'شروط الخدمة',
      lastUpdated: 'آخر تحديث: يناير 2024',
      backToHome: 'العودة للرئيسية',
      sections: [
        {
          title: '1. قبول الشروط',
          content: 'باستخدام منصة أراكني، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.'
        },
        {
          title: '2. وصف الخدمة',
          content: 'أراكني هي منصة إلكترونية تربط بين مؤجري المعدات والمستأجرين في المملكة العربية السعودية. نحن نسهل عملية التأجير ولكننا لسنا مالكين للمعدات المعروضة.'
        },
        {
          title: '3. التسجيل والحساب',
          content: 'يجب أن تكون 18 عامًا أو أكثر للتسجيل\nيجب تقديم معلومات صحيحة ومحدثة\nأنت مسؤول عن الحفاظ على سرية كلمة المرور\nيجب إخطارنا فورًا بأي استخدام غير مصرح به لحسابك'
        },
        {
          title: '4. استخدام المنصة',
          content: 'يُسمح لك بـ:\n• تصفح المعدات المتاحة\n• حجز المعدات للتأجير\n• التواصل مع المؤجرين\n• تقييم الخدمات\n\nيُمنع عليك:\n• استخدام المنصة لأغراض غير قانونية\n• انتهاك حقوق الملكية الفكرية\n• نشر محتوى مسيء أو ضار\n• محاولة اختراق النظام'
        },
        {
          title: '5. التأجير والدفع',
          content: 'جميع عمليات التأجير تخضع لموافقة المؤجر\nالأسعار المعروضة شاملة للضريبة\nالدفع مطلوب مقدمًا قبل استلام المعدات\nقد تُطلب وديعة تأمين قابلة للاسترداد\nرسوم الخدمة تُطبق على كل معاملة'
        },
        {
          title: '6. مسؤوليات المستأجر',
          content: 'أنت مسؤول عن:\n• فحص المعدات قبل الاستلام\n• استخدام المعدات بطريقة آمنة ومناسبة\n• إرجاع المعدات في الوقت المحدد وبنفس الحالة\n• دفع أي أضرار أو تأخير\n• الحصول على التأمين المناسب إذا لزم الأمر'
        },
        {
          title: '7. مسؤوليات المؤجر',
          content: 'المؤجر مسؤول عن:\n• ضمان سلامة وجودة المعدات\n• تقديم تعليمات الاستخدام الآمن\n• الصيانة الدورية للمعدات\n• توفير المعدات في الوقت المحدد\n• الالتزام بالأسعار المتفق عليها'
        },
        {
          title: '8. الإلغاء والاسترداد',
          content: 'يمكن إلغاء الحجز حتى 24 ساعة قبل موعد الاستلام\nرسوم الإلغاء قد تُطبق حسب سياسة المؤجر\nالاسترداد يتم خلال 5-7 أيام عمل\nفي حالة عدم توفر المعدات، سيتم الاسترداد الكامل'
        },
        {
          title: '9. إخلاء المسؤولية',
          content: 'أراكني غير مسؤولة عن:\n• جودة أو سلامة المعدات المؤجرة\n• أي أضرار أو إصابات ناتجة عن استخدام المعدات\n• النزاعات بين المؤجرين والمستأجرين\n• فقدان أو تلف الممتلكات الشخصية'
        },
        {
          title: '10. تعديل الشروط',
          content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم إخطار المستخدمين بأي تغييرات جوهرية عبر البريد الإلكتروني أو المنصة.'
        },
        {
          title: '11. القانون المطبق',
          content: 'تخضع هذه الشروط لقوانين المملكة العربية السعودية. أي نزاعات ستُحل وفقًا للقوانين السعودية والمحاكم المختصة في الرياض.'
        }
      ]
    },
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2024',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By using the Arakne platform, you agree to be bound by these Terms and Conditions. If you do not agree to any of these terms, please do not use our services.'
        },
        {
          title: '2. Service Description',
          content: 'Arakne is an online platform that connects equipment renters with lessees in Saudi Arabia. We facilitate the rental process but do not own the equipment listed on our platform.'
        },
        {
          title: '3. Registration and Account',
          content: 'You must be 18 years or older to register\nYou must provide accurate and current information\nYou are responsible for maintaining password confidentiality\nYou must notify us immediately of any unauthorized account use'
        },
        {
          title: '4. Platform Usage',
          content: 'You are allowed to:\n• Browse available equipment\n• Book equipment for rental\n• Communicate with renters\n• Rate and review services\n\nYou are prohibited from:\n• Using the platform for illegal purposes\n• Violating intellectual property rights\n• Posting offensive or harmful content\n• Attempting to hack the system'
        },
        {
          title: '5. Rental and Payment',
          content: 'All rentals are subject to renter approval\nPrices shown are inclusive of tax\nPayment is required in advance before equipment pickup\nA refundable security deposit may be required\nService fees apply to each transaction'
        },
        {
          title: '6. Renter Responsibilities',
          content: 'You are responsible for:\n• Inspecting equipment before pickup\n• Using equipment safely and appropriately\n• Returning equipment on time and in same condition\n• Paying for any damages or delays\n• Obtaining appropriate insurance if required'
        },
        {
          title: '7. Owner Responsibilities',
          content: 'Equipment owners are responsible for:\n• Ensuring equipment safety and quality\n• Providing safe usage instructions\n• Regular equipment maintenance\n• Providing equipment at scheduled time\n• Honoring agreed-upon prices'
        },
        {
          title: '8. Cancellation and Refunds',
          content: 'Bookings can be cancelled up to 24 hours before pickup\nCancellation fees may apply per owner policy\nRefunds are processed within 5-7 business days\nFull refund provided if equipment unavailable'
        },
        {
          title: '9. Disclaimer',
          content: 'Arakne is not responsible for:\n• Quality or safety of rented equipment\n• Any damages or injuries from equipment use\n• Disputes between owners and renters\n• Loss or damage to personal property'
        },
        {
          title: '10. Terms Modification',
          content: 'We reserve the right to modify these terms at any time. Users will be notified of any material changes via email or platform notification.'
        },
        {
          title: '11. Governing Law',
          content: 'These terms are governed by the laws of Saudi Arabia. Any disputes will be resolved according to Saudi law and the competent courts in Riyadh.'
        }
      ]
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f1eb', color: '#2c2c2c' }}>
      {/* Header */}
      <header className="py-4" style={{ backgroundColor: '#2c2c2c' }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-white hover:opacity-80">
            <ArrowLeft className="w-5 h-5" />
            <span>{currentContent.backToHome}</span>
          </Link>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-2 bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <Globe className="w-4 h-4" />
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {currentContent.title}
            </h1>
            <p className="text-lg opacity-70">
              {currentContent.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {currentContent.sections.map((section, index) => (
              <div 
                key={index}
                className="p-8 rounded-lg shadow-sm"
                style={{ backgroundColor: '#ffffff' }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {section.content.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Agreement Section */}
          <div 
            className="mt-12 p-8 rounded-lg text-center"
            style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'الموافقة على الشروط' : 'Agreement to Terms'}
            </h3>
            <p className="mb-6">
              {isArabic 
                ? 'باستخدام منصة أراكني، فإنك توافق على جميع الشروط والأحكام المذكورة أعلاه.'
                : 'By using the Arakne platform, you agree to all the terms and conditions stated above.'
              }
            </p>
            <Link to="/">
              <Button 
                className="btn-secondary px-8 py-3"
                style={{ backgroundColor: '#f5f1eb', color: '#2c2c2c' }}
              >
                {isArabic ? 'أوافق وأريد المتابعة' : 'I Agree and Continue'}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TermsOfService