import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, FileText, Users, Shield, CreditCard, AlertTriangle, Scale, Globe, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function TermsOfService() {
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
            Last updated: January 2024
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="#introduction" className="block p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                <span className="font-medium text-blue-800">1. Introduction</span>
              </a>
              <a href="#definitions" className="block p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                <span className="font-medium text-green-800">2. Definitions</span>
              </a>
              <a href="#services" className="block p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                <span className="font-medium text-purple-800">3. Legal Scope of Services</span>
              </a>
              <a href="#contract" className="block p-4 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                <span className="font-medium text-orange-800">4. Electronic Contract</span>
              </a>
              <a href="#terms-of-use" className="block p-4 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
                <span className="font-medium text-red-800">5. Terms of Use</span>
              </a>
              <a href="#registration" className="block p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors">
                <span className="font-medium text-indigo-800">6. Account Registration</span>
              </a>
              <a href="#licenses" className="block p-4 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors">
                <span className="font-medium text-pink-800">7. Licenses and Restrictions</span>
              </a>
              <a href="#unacceptable" className="block p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                <span className="font-medium text-yellow-800">8. Unacceptable Use</span>
              </a>
              <a href="#lessor" className="block p-4 rounded-lg bg-teal-50 hover:bg-teal-100 transition-colors">
                <span className="font-medium text-teal-800">9. Lessor (Seller) Policy</span>
              </a>
            </div>
          </div>

          {/* Introduction Section */}
          <section id="introduction" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                1. Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Welcome to the ARAKNE platform ("Platform," "Website," or "Application"). These Terms of Service ("Terms") govern your use of our platform and services. By accessing or using ARAKNE, you agree to be bound by these Terms.
                </p>
                <p className="mb-4">
                  ARAKNE is operated by ARAKNE Technology, a company committed to providing innovative rental solutions while ensuring compliance with applicable laws and regulations.
                </p>
                <p>
                  Please read these Terms carefully before using our services. If you do not agree with any part of these Terms, you must not use our platform.
                </p>
              </div>
            </div>
          </section>

          {/* Definitions Section */}
          <section id="definitions" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                2. Definitions
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Platform" or "ARAKNE":</div>
                  <div className="text-gray-700">Refers to the ARAKNE website, mobile application, and all related services provided by ARAKNE Technology.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"User" or "you":</div>
                  <div className="text-gray-700">Refers to anyone who registers an account or uses the Platform, whether a Lessor (seller) or a Lessee (consumer).</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Lessor" (Seller):</div>
                  <div className="text-gray-700">Refers to any individual, organization, or entity that offers equipment or goods for rent through the Platform.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Lessee" (Consumer):</div>
                  <div className="text-gray-700">Refers to any individual, organization, or entity that rents equipment from Lessors.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Rental Agreement":</div>
                  <div className="text-gray-700">Refers to the contract concluded between the Lessor and the Lessee for rental operations.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Content":</div>
                  <div className="text-gray-700">Refers to all information, data, text, images, videos, and other materials available on the Platform.</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">"Laws":</div>
                  <div className="text-gray-700">Refers to the applicable laws and regulations in the country where the contract between the Lessor and the Lessee is concluded.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Scope of Services */}
          <section id="services" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                3. Legal Scope of Services
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong>3.1.</strong> ARAKNE is an electronic platform that operates as an open market and intermediary between Lessors and Lessees, connecting the Lessor who offers goods for rent with the Lessee who requests to rent one of these goods. Our role is limited to providing mediation services via the Platform, facilitating connections between parties for their final agreement. We do not have any supervisory or regulatory authority over the Lessor, nor are we representatives or agents of the Lessees.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Our Services Include:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Free account creation for Lessees, and subscription for Lessors to one of the packages offered by the Website.</li>
                    <li>• Providing a secure platform for listing and browsing rental equipment.</li>
                    <li>• Providing various online payment methods suitable for all users.</li>
                    <li>• Payments are processed securely via external service providers, with the Platform collecting a commission ranging from 5% to 15% of each rental transaction, depending on the item's classification.</li>
                  </ul>
                </div>
                
                <p className="mb-4">
                  <strong>3.2.</strong> Advertisements for goods offered for rent are from the Lessor to the Lessee, without any intervention from the ARAKNE platform in providing the service to the Lessee. The platform monitors all inquiries and attempts to resolve issues that may arise between the two parties, in addition to managing requests made on the Website.
                </p>
                
                <p>
                  <strong>3.3.</strong> The Company is not a party to any rental agreements between the Lessor and the Lessee.
                </p>
              </div>
            </div>
          </section>

          {/* Electronic Contract */}
          <section id="contract" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                4. Electronic Contract
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong>4.1.</strong> These terms constitute a fully legally binding electronic contract between ARAKNE Technology, as the owner and operator of the ARAKNE platform, and you as a user (Lessor and Lessee). By using the Platform, you agree to these terms and become bound by them as you would by written contracts, and they produce the same legal effects as such contracts.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Use */}
          <section id="terms-of-use" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                5. Terms of Use
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  By using the ARAKNE platform, you acknowledge and agree that:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>You are of legal age to enter into contracts, or you have the consent of a parent or legal guardian, and you bear full responsibility for your actions and the consequences of using the Platform, including payment operations.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>You will use the Platform in compliance with all applicable laws and regulations.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>You will not use the Platform for any illegal or unauthorized purposes.</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div>You will respect the rights and property of other users and third parties.</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Account Registration and Membership */}
          <section id="registration" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                6. Account Registration and Membership
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  <strong>6.1.</strong> To access certain sections and features of the ARAKNE platform, you must register an account, either for free for the Lessee, or by subscription for the Lessor, and you agree to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Account Requirements:</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Provide accurate and complete information</li>
                      <li>• Maintain the security of your account</li>
                      <li>• Update information as necessary</li>
                      <li>• Accept responsibility for all account activity</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3">Prohibited Activities:</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Creating multiple accounts</li>
                      <li>• Sharing account credentials</li>
                      <li>• Using stolen or fake payment cards</li>
                      <li>• Providing false information</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  <strong>6.4.</strong> If we fail to take any action against any violations by you or any other person, this does not mean a waiver by ARAKNE Technology of its right to take any legal action regarding those violations, nor does it guarantee taking such actions against all potential violations of these terms.
                </p>
              </div>
            </div>
          </section>

          {/* Licenses and Restrictions on Use */}
          <section id="licenses" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-pink-600" />
                </div>
                7. Licenses and Restrictions on Use
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  Subject to your compliance with these Terms, ARAKNE grants you a limited, non-exclusive, non-transferable license to access and use the Platform for its intended purposes.
                </p>
                
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-3">License Restrictions:</h4>
                  <p className="text-yellow-800">
                    You may not modify, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from the Platform without our express written consent.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Unacceptable Use */}
          <section id="unacceptable" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                8. Unacceptable Use
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                  You agree not to use the Platform for any of the following prohibited activities:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3">Illegal Activities:</h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Violating any applicable laws or regulations</li>
                      <li>• Engaging in fraudulent activities</li>
                      <li>• Money laundering or terrorist financing</li>
                      <li>• Intellectual property infringement</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-3">Platform Abuse:</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>• Attempting to hack or compromise security</li>
                      <li>• Uploading malicious software or viruses</li>
                      <li>• Spamming or sending unsolicited communications</li>
                      <li>• Interfering with platform operations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lessor (Seller) Policy */}
          <section id="lessor" className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-teal-600" />
                </div>
                9. Lessor (Seller) Policy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <div className="space-y-6">
                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-teal-900 mb-3">Lessor Responsibilities:</h4>
                    <ul className="space-y-2 text-teal-800">
                      <li>• <strong>9.7.</strong> The Lessor must maintain the confidentiality and privacy of any information obtained from the Lessee.</li>
                      <li>• <strong>9.8.</strong> The Lessor is obligated to rent the item according to the contract concluded between them and the Lessee without any legal responsibility on the ARAKNE platform, and the Lessor is obligated to deliver the item to the Lessee without delay.</li>
                      <li>• <strong>9.9.</strong> The Lessor acknowledges that the ARAKNE platform has no relationship with the Lessee and is not an agent thereof, and therefore we have no supervisory or regulatory authority over the Lessor or Lessee, and each party is personally responsible according to this agreement and according to the law.</li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>9.11.</strong> In case of a dispute between the Lessor and the Lessee regarding any order, the contract concluded between them will be enforced through amicable or judicial settlement means without recourse to the ARAKNE platform in any way. Any dispute between the Lessor and the Lessee must be resolved directly between the parties.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8" />
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-4 opacity-90">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 opacity-70" />
                    <span>support@arakne.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 opacity-70" />
                    <span>+966 XX XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 opacity-70" />
                    <span>www.arakne.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Legal Notice</h3>
                <p className="opacity-90">
                  These Terms of Service are governed by the laws of Saudi Arabia. Any disputes arising from these terms will be subject to the jurisdiction of the competent courts in Riyadh, Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Agreement to Terms
            </h3>
            <p className="mb-6 text-lg opacity-90">
              By using the ARAKNE platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <Link to="/">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                I Agree and Continue
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService