import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  const [language, setLanguage] = useState('ar')
  const isArabic = language === 'ar'

  const content = {
    ar: {
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: يناير 2024',
      backToHome: 'العودة للرئيسية',
      sections: [
        {
          title: '1. مقدمة',
          content: 'نحن في أراكني نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك عند استخدام منصتنا لتأجير المعدات.'
        },
        {
          title: '2. المعلومات التي نجمعها',
          content: 'نجمع المعلومات التالية:\n• معلومات الحساب: الاسم، البريد الإلكتروني، رقم الهاتف\n• معلومات الدفع: تفاصيل بطاقة الائتمان (مشفرة)\n• معلومات الموقع: لتحديد المعدات القريبة منك\n• سجل الاستخدام: تفاصيل التأجيرات والتفضيلات'
        },
        {
          title: '3. كيفية استخدام المعلومات',
          content: 'نستخدم معلوماتك لـ:\n• تقديم خدمات التأجير\n• معالجة المدفوعات\n• التواصل معك بشأن طلباتك\n• تحسين خدماتنا\n• ضمان الأمان ومنع الاحتيال'
        },
        {
          title: '4. مشاركة المعلومات',
          content: 'لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك المعلومات مع:\n• مقدمي الخدمات المعتمدين\n• السلطات القانونية عند الضرورة\n• شركاء الدفع لمعالجة المعاملات'
        },
        {
          title: '5. أمان البيانات',
          content: 'نستخدم تقنيات التشفير المتقدمة وبروتوكولات الأمان لحماية معلوماتك. جميع المعاملات المالية محمية بتشفير SSL.'
        },
        {
          title: '6. حقوقك',
          content: 'لديك الحق في:\n• الوصول إلى معلوماتك الشخصية\n• تصحيح المعلومات غير الصحيحة\n• حذف حسابك ومعلوماتك\n• سحب الموافقة على معالجة البيانات'
        },
        {
          title: '7. ملفات تعريف الارتباط',
          content: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك. يمكنك إدارة إعدادات ملفات تعريف الارتباط في متصفحك.'
        },
        {
          title: '8. التواصل معنا',
          content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا على:\nالبريد الإلكتروني: privacy@arakne.sa\nالهاتف: +966 11 123 4567'
        }
      ]
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2024',
      backToHome: 'Back to Home',
      sections: [
        {
          title: '1. Introduction',
          content: 'At Arakne, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our equipment rental platform.'
        },
        {
          title: '2. Information We Collect',
          content: 'We collect the following information:\n• Account Information: Name, email, phone number\n• Payment Information: Credit card details (encrypted)\n• Location Information: To find equipment near you\n• Usage History: Rental details and preferences'
        },
        {
          title: '3. How We Use Information',
          content: 'We use your information to:\n• Provide rental services\n• Process payments\n• Communicate about your orders\n• Improve our services\n• Ensure security and prevent fraud'
        },
        {
          title: '4. Information Sharing',
          content: 'We do not sell or rent your personal information to third parties. We may share information with:\n• Authorized service providers\n• Legal authorities when required\n• Payment partners for transaction processing'
        },
        {
          title: '5. Data Security',
          content: 'We use advanced encryption technologies and security protocols to protect your information. All financial transactions are protected with SSL encryption.'
        },
        {
          title: '6. Your Rights',
          content: 'You have the right to:\n• Access your personal information\n• Correct inaccurate information\n• Delete your account and information\n• Withdraw consent for data processing'
        },
        {
          title: '7. Cookies',
          content: 'We use cookies to improve your experience and remember your preferences. You can manage cookie settings in your browser.'
        },
        {
          title: '8. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at:\nEmail: privacy@arakne.sa\nPhone: +966 11 123 4567'
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

          {/* Contact Section */}
          <div 
            className="mt-12 p-8 rounded-lg text-center"
            style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {isArabic ? 'هل لديك أسئلة؟' : 'Have Questions?'}
            </h3>
            <p className="mb-6">
              {isArabic 
                ? 'نحن هنا لمساعدتك. تواصل معنا في أي وقت.'
                : 'We\'re here to help. Contact us anytime.'
              }
            </p>
            <Button 
              className="btn-secondary px-8 py-3"
              style={{ backgroundColor: '#f5f1eb', color: '#2c2c2c' }}
            >
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy