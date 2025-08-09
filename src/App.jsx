import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Globe, Menu, X, Star, CheckCircle, Users, MapPin, Clock, Shield } from 'lucide-react'
import './App.css'

// Import images
import arakneLogoSrc from './assets/arakne-logo.png'
import heroImageSrc from './assets/hero_image.png'
import tablesChairsSrc from './assets/tables_chairs.png'
import soundLightingSrc from './assets/sound_lighting.png'
import tentsCanopiesSrc from './assets/tents_canopies.png'
import cateringEquipmentSrc from './assets/catering_equipment.png'
import tablewareSrc from './assets/tableware.png'
import bbqEquipmentSrc from './assets/bbq_equipment.png'
import decorationsSrc from './assets/decorations.png'
import floorCoveringsSrc from './assets/floor_coverings.png'
import bikesSrc from './assets/bikes.png'
import campingHikingSrc from './assets/camping_hiking.png'
import fitnessEquipmentSrc from './assets/fitness_equipment.png'
import eScootersSrc from './assets/e_scooters.png'
import sportsAccessoriesSrc from './assets/sports_accessories.png'

function App() {
  const [language, setLanguage] = useState('ar')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isArabic = language === 'ar'

  const content = {
    ar: {
      // Header
      nav: {
        home: 'الرئيسية',
        categories: 'الفئات',
        about: 'حولنا',
        contact: 'اتصل بنا'
      },
      // Hero Section
      hero: {
        title: 'معدات التأجير الاحترافية، بكل بساطة',
        subtitle: 'تأجير المعدات أصبح أسهل للجميع',
        description: 'اكتشف أكبر منصة لتأجير المعدات في المملكة العربية السعودية. من معدات الفعاليات إلى المعدات الرياضية، نربطك بأفضل الموردين المحليين.',
        cta: 'ابدأ الآن',
        downloadApp: 'حمل التطبيق'
      },
      // Problem/Solution Section
      problem: {
        title: 'لماذا التأجير أفضل من الشراء؟',
        cards: [
          {
            title: 'توفير في التكلفة',
            description: 'وفر حتى 80% من تكلفة شراء المعدات الجديدة'
          },
          {
            title: 'لا حاجة للتخزين',
            description: 'لا تقلق بشأن مساحة التخزين أو الصيانة'
          },
          {
            title: 'أحدث المعدات',
            description: 'احصل على أحدث المعدات دون استثمار كبير'
          }
        ]
      },
      // How It Works
      howItWorks: {
        title: 'كيف يعمل أراكني؟',
        steps: [
          {
            number: '1',
            title: 'تصفح المعدات',
            description: 'اختر من مجموعة واسعة من المعدات المتاحة'
          },
          {
            number: '2',
            title: 'احجز بسهولة',
            description: 'احجز المعدات التي تحتاجها بنقرات قليلة'
          },
          {
            number: '3',
            title: 'استلم واستمتع',
            description: 'استلم معداتك واستمتع بفعاليتك أو نشاطك'
          }
        ]
      },
      // Categories
      categories: {
        title: 'فئات المعدات',
        subtitle: 'اكتشف مجموعة واسعة من المعدات للتأجير',
        events: {
          title: 'معدات الفعاليات',
          subcategories: [
            { name: 'طاولات وكراسي', icon: tablesChairsSrc },
            { name: 'الصوت والإضاءة', icon: soundLightingSrc },
            { name: 'خيام ومظلات', icon: tentsCanopiesSrc },
            { name: 'معدات الضيافة', icon: cateringEquipmentSrc },
            { name: 'أدوات المائدة', icon: tablewareSrc },
            { name: 'معدات الشواء', icon: bbqEquipmentSrc },
            { name: 'الديكورات', icon: decorationsSrc },
            { name: 'أغطية الأرضيات', icon: floorCoveringsSrc }
          ]
        },
        sports: {
          title: 'المعدات الرياضية',
          subcategories: [
            { name: 'دراجات', icon: bikesSrc },
            { name: 'التخييم والمشي', icon: campingHikingSrc },
            { name: 'معدات اللياقة', icon: fitnessEquipmentSrc },
            { name: 'سكوتر كهربائي', icon: eScootersSrc },
            { name: 'إكسسوارات رياضية', icon: sportsAccessoriesSrc }
          ]
        }
      },
      // Saudi Focus
      saudiFocus: {
        title: 'خدمة شاملة في جميع أنحاء المملكة',
        description: 'نفخر بخدمة العملاء في جميع مدن المملكة العربية السعودية مع شبكة واسعة من الموردين المحليين الموثوقين.',
        cities: ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'الطائف', 'تبوك', 'أبها']
      },
      // Benefits
      benefits: {
        title: 'لماذا تختار أراكني؟',
        items: [
          {
            icon: CheckCircle,
            title: 'جودة مضمونة',
            description: 'جميع المعدات مفحوصة ومضمونة الجودة'
          },
          {
            icon: Users,
            title: 'دعم محلي',
            description: 'فريق دعم عملاء محلي متاح 24/7'
          },
          {
            icon: MapPin,
            title: 'تغطية شاملة',
            description: 'خدمة في جميع أنحاء المملكة العربية السعودية'
          },
          {
            icon: Shield,
            title: 'أمان وثقة',
            description: 'معاملات آمنة وموردين موثوقين'
          }
        ]
      },
      // Testimonials
      testimonials: {
        title: 'ماذا يقول عملاؤنا',
        items: [
          {
            name: 'أحمد محمد',
            role: 'منظم فعاليات',
            text: 'أراكني سهل علي تنظيم الفعاليات بشكل كبير. المعدات عالية الجودة والخدمة ممتازة.',
            rating: 5
          },
          {
            name: 'فاطمة العلي',
            role: 'مدربة لياقة',
            text: 'أستخدم أراكني لتأجير معدات اللياقة لعملائي. الخدمة سريعة والأسعار معقولة.',
            rating: 5
          },
          {
            name: 'سعد الغامدي',
            role: 'مؤسس شركة',
            text: 'منصة رائعة وفرت علي الكثير من التكاليف في تجهيز المكتب الجديد.',
            rating: 5
          }
        ]
      },
      // CTA Section
      cta: {
        title: 'جاهز للبدء؟',
        description: 'انضم إلى آلاف العملاء الذين يثقون بأراكني لاحتياجاتهم من تأجير المعدات',
        button: 'ابدأ الآن',
        email: 'أو اشترك للحصول على التحديثات'
      },
      // Footer
      footer: {
        description: 'أراكني - منصة تأجير المعدات الرائدة في المملكة العربية السعودية',
        links: {
          about: 'حولنا',
          contact: 'اتصل بنا',
          privacy: 'سياسة الخصوصية',
          terms: 'الشروط والأحكام'
        },
        copyright: '© 2025 أراكني. جميع الحقوق محفوظة.'
      }
    },
    en: {
      // Header
      nav: {
        home: 'Home',
        categories: 'Categories',
        about: 'About',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        title: 'Professional Equipment Rental, Simplified',
        subtitle: 'Equipment Rental Made Easier for Everyone',
        description: 'Discover Saudi Arabia\'s largest equipment rental marketplace. From event equipment to sports gear, we connect you with the best local suppliers.',
        cta: 'Get Started',
        downloadApp: 'Download App'
      },
      // Problem/Solution Section
      problem: {
        title: 'Why Rent Instead of Buy?',
        cards: [
          {
            title: 'Cost Savings',
            description: 'Save up to 80% compared to buying new equipment'
          },
          {
            title: 'No Storage Needed',
            description: 'No worries about storage space or maintenance'
          },
          {
            title: 'Latest Equipment',
            description: 'Access the latest equipment without major investment'
          }
        ]
      },
      // How It Works
      howItWorks: {
        title: 'How Arakne Works?',
        steps: [
          {
            number: '1',
            title: 'Browse Equipment',
            description: 'Choose from a wide range of available equipment'
          },
          {
            number: '2',
            title: 'Book Easily',
            description: 'Reserve the equipment you need with just a few clicks'
          },
          {
            number: '3',
            title: 'Receive & Enjoy',
            description: 'Get your equipment and enjoy your event or activity'
          }
        ]
      },
      // Categories
      categories: {
        title: 'Equipment Categories',
        subtitle: 'Discover a wide range of equipment for rent',
        events: {
          title: 'Event Equipment',
          subcategories: [
            { name: 'Tables & Chairs', icon: tablesChairsSrc },
            { name: 'Sound & Lighting', icon: soundLightingSrc },
            { name: 'Tents & Canopies', icon: tentsCanopiesSrc },
            { name: 'Catering Equipment', icon: cateringEquipmentSrc },
            { name: 'Tableware', icon: tablewareSrc },
            { name: 'BBQ Equipment', icon: bbqEquipmentSrc },
            { name: 'Decorations', icon: decorationsSrc },
            { name: 'Floor Coverings', icon: floorCoveringsSrc }
          ]
        },
        sports: {
          title: 'Sports Equipment',
          subcategories: [
            { name: 'Bikes', icon: bikesSrc },
            { name: 'Camping & Hiking', icon: campingHikingSrc },
            { name: 'Fitness Equipment', icon: fitnessEquipmentSrc },
            { name: 'E-Scooters', icon: eScootersSrc },
            { name: 'Sports Accessories', icon: sportsAccessoriesSrc }
          ]
        }
      },
      // Saudi Focus
      saudiFocus: {
        title: 'Comprehensive Service Across Saudi Arabia',
        description: 'We proudly serve customers in all cities across Saudi Arabia with a wide network of trusted local suppliers.',
        cities: ['Riyadh', 'Jeddah', 'Dammam', 'Mecca', 'Medina', 'Taif', 'Tabuk', 'Abha']
      },
      // Benefits
      benefits: {
        title: 'Why Choose Arakne?',
        items: [
          {
            icon: CheckCircle,
            title: 'Quality Guaranteed',
            description: 'All equipment is inspected and quality guaranteed'
          },
          {
            icon: Users,
            title: 'Local Support',
            description: 'Local customer support team available 24/7'
          },
          {
            icon: MapPin,
            title: 'Nationwide Coverage',
            description: 'Service across all of Saudi Arabia'
          },
          {
            icon: Shield,
            title: 'Safe & Secure',
            description: 'Secure transactions and trusted suppliers'
          }
        ]
      },
      // Testimonials
      testimonials: {
        title: 'What Our Customers Say',
        items: [
          {
            name: 'Ahmed Mohammed',
            role: 'Event Organizer',
            text: 'Arakne made organizing events much easier. High-quality equipment and excellent service.',
            rating: 5
          },
          {
            name: 'Fatima Al-Ali',
            role: 'Fitness Trainer',
            text: 'I use Arakne to rent fitness equipment for my clients. Fast service and reasonable prices.',
            rating: 5
          },
          {
            name: 'Saad Al-Ghamdi',
            role: 'Company Founder',
            text: 'Amazing platform that saved me a lot of costs in setting up the new office.',
            rating: 5
          }
        ]
      },
      // CTA Section
      cta: {
        title: 'Ready to Get Started?',
        description: 'Join thousands of customers who trust Arakne for their equipment rental needs',
        button: 'Get Started',
        email: 'Or subscribe for updates'
      },
      // Footer
      footer: {
        description: 'Arakne - Leading equipment rental marketplace in Saudi Arabia',
        links: {
          about: 'About Us',
          contact: 'Contact',
          privacy: 'Privacy Policy',
          terms: 'Terms & Conditions'
        },
        copyright: '© 2025 Arakne. All rights reserved.'
      }
    }
  }

  const currentContent = content[language]

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar')
  }

  return (
    <div className={`min-h-screen ${isArabic ? 'rtl' : 'ltr'}`} style={{ backgroundColor: '#f5f1eb', color: '#2c2c2c' }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: '#f5f1eb', borderBottom: '2px solid #2c2c2c' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={arakneLogoSrc} alt="Arakne Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold" style={{ color: '#2c2c2c' }}>Arakne</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:opacity-70 transition-opacity">{currentContent.nav.home}</a>
              <a href="#categories" className="hover:opacity-70 transition-opacity">{currentContent.nav.categories}</a>
              <a href="#about" className="hover:opacity-70 transition-opacity">{currentContent.nav.about}</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity">{currentContent.nav.contact}</a>
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleLanguage}
                className="language-toggle px-3 py-2 rounded-lg"
                style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'EN' : 'العربية'}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: '#2c2c2c' }}>
              <div className="flex flex-col space-y-3 pt-4">
                <a href="#home" className="hover:opacity-70 transition-opacity">{currentContent.nav.home}</a>
                <a href="#categories" className="hover:opacity-70 transition-opacity">{currentContent.nav.categories}</a>
                <a href="#about" className="hover:opacity-70 transition-opacity">{currentContent.nav.about}</a>
                <a href="#contact" className="hover:opacity-70 transition-opacity">{currentContent.nav.contact}</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {currentContent.hero.title}
              </h1>
              <p className="text-lg lg:text-xl mb-4 opacity-70">
                {currentContent.hero.subtitle}
              </p>
              <p className="text-lg mb-8 leading-relaxed">
                {currentContent.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
                  {currentContent.hero.cta}
                </Button>
                <Button className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg">
                  {currentContent.hero.downloadApp}
                </Button>
              </div>

              {/* App Store Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/app/arakne" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on App Store" 
                    className="h-12 hover-scale"
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.arakne.app" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-12 hover-scale"
                  />
                </a>
              </div>
            </div>

            <div className="animate-fadeInUp animate-delay-200">
              <img 
                src={heroImageSrc} 
                alt="Equipment Rental Marketplace" 
                className="w-full h-auto rounded-lg animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20" style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 animate-fadeInUp">
            {currentContent.problem.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.problem.cards.map((card, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-lg animate-fadeInUp hover-lift"
                style={{ 
                  backgroundColor: '#f5f1eb', 
                  color: '#2c2c2c',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 animate-fadeInUp">
            {currentContent.howItWorks.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.howItWorks.steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold animate-bounce"
                  style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20" style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {currentContent.categories.title}
            </h2>
            <p className="text-xl opacity-80">
              {currentContent.categories.subtitle}
            </p>
          </div>

          {/* Events Category */}
          <div className="mb-16">
            <h3 className="text-2xl lg:text-4xl font-bold text-center mb-12 animate-fadeInUp">
              {currentContent.categories.events.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {currentContent.categories.events.subcategories.map((subcategory, index) => (
                <div 
                  key={index}
                  className="category-card p-6 rounded-lg text-center hover-lift animate-scaleIn"
                  style={{ 
                    backgroundColor: '#f5f1eb', 
                    color: '#2c2c2c',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <img 
                    src={subcategory.icon} 
                    alt={subcategory.name}
                    className="category-icon w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold">{subcategory.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Sports Category */}
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-center mb-12 animate-fadeInUp">
              {currentContent.categories.sports.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {currentContent.categories.sports.subcategories.map((subcategory, index) => (
                <div 
                  key={index}
                  className="category-card p-6 rounded-lg text-center hover-lift animate-scaleIn"
                  style={{ 
                    backgroundColor: '#f5f1eb', 
                    color: '#2c2c2c',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <img 
                    src={subcategory.icon} 
                    alt={subcategory.name}
                    className="category-icon w-16 h-16 mx-auto mb-4"
                  />
                  <h4 className="font-semibold">{subcategory.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saudi Focus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {currentContent.saudiFocus.title}
            </h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              {currentContent.saudiFocus.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentContent.saudiFocus.cities.map((city, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-lg animate-fadeInUp hover-lift"
                style={{ 
                  backgroundColor: '#2c2c2c', 
                  color: '#f5f1eb',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <MapPin className="w-8 h-8 mx-auto mb-2" />
                <span className="font-semibold">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 animate-fadeInUp">
            {currentContent.benefits.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.benefits.items.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div 
                  key={index}
                  className="text-center p-6 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="w-16 h-16 mx-auto mb-6 animate-pulse" style={{ color: '#f5f1eb' }} />
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="leading-relaxed opacity-80">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 animate-fadeInUp">
            {currentContent.testimonials.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.testimonials.items.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 rounded-lg animate-fadeInUp hover-lift"
                style={{ 
                  backgroundColor: '#2c2c2c', 
                  color: '#f5f1eb',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current animate-pulse" style={{ color: '#f5f1eb' }} />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="opacity-70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#2c2c2c', color: '#f5f1eb' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fadeInUp">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {currentContent.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-80">
              {currentContent.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
                {currentContent.cta.button}
              </Button>
            </div>

            {/* App Store Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://apps.apple.com/app/arakne" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-12 hover-scale"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.arakne.app" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12 hover-scale"
                />
              </a>
            </div>

            <p className="text-lg opacity-70">{currentContent.cta.email}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <input 
                type="email" 
                placeholder={isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                className="px-4 py-3 rounded-lg border-2 flex-1 max-w-md"
                style={{ backgroundColor: '#f5f1eb', color: '#2c2c2c', borderColor: '#f5f1eb' }}
              />
              <Button className="btn-secondary px-6 py-3 rounded-lg">
                {isArabic ? 'اشترك' : 'Subscribe'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: '#f5f1eb', borderTop: '2px solid #2c2c2c' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={arakneLogoSrc} alt="Arakne Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold">Arakne</span>
              </div>
              <p className="leading-relaxed opacity-80">
                {currentContent.footer.description}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold mb-4">{isArabic ? 'روابط مهمة' : 'Important Links'}</h4>
              <div className="space-y-2">
                <a href="#about" className="block hover:opacity-70 transition-opacity">
                  {currentContent.footer.links.about}
                </a>
                <a href="#contact" className="block hover:opacity-70 transition-opacity">
                  {currentContent.footer.links.contact}
                </a>
                <a href="#privacy" className="block hover:opacity-70 transition-opacity">
                  {currentContent.footer.links.privacy}
                </a>
                <a href="#terms" className="block hover:opacity-70 transition-opacity">
                  {currentContent.footer.links.terms}
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4">{isArabic ? 'تواصل معنا' : 'Contact Us'}</h4>
              <div className="space-y-2 opacity-80">
                <p>info@arakne.com.sa</p>
                <p>+966 11 123 4567</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 text-center opacity-70" style={{ borderColor: '#2c2c2c' }}>
            <p>{currentContent.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

