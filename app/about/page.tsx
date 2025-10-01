"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, User, Award, Target, Heart, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center animate-in fade-in duration-700">
              <Shield className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-900">InsureBazaar</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <Link
                      href="/services/health-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Health Insurance
                    </Link>
                    <Link
                      href="/services/life-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Life Insurance
                    </Link>
                    <Link
                      href="/services/car-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Car Insurance
                    </Link>
                    <Link
                      href="/services/travel-insurance"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Travel Insurance
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/about" className="text-blue-600 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-1" />
                  (800) 123-4567
                </div>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-600 hover:text-white transition-all duration-200 bg-transparent"
                  >
                    <User className="h-4 w-4 mr-1" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-in fade-in duration-700">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">About InsureBazaar</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
              India's leading insurance comparison platform, helping millions of customers find the right insurance
              coverage at the best prices since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 text-pretty">
                Founded in 2008, InsureBazaar started with a simple mission: to make insurance accessible, transparent,
                and affordable for every Indian family. What began as a small team of insurance experts has grown into
                India's most trusted insurance comparison platform.
              </p>
              <p className="text-lg text-gray-600 mb-6 text-pretty">
                Today, we partner with over 50 leading insurance companies to offer comprehensive coverage options
                across health, life, motor, and travel insurance. Our technology-driven approach ensures that customers
                can compare policies, understand coverage details, and make informed decisions with confidence.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10M+</div>
                  <div className="text-sm text-gray-600">Customers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Insurance Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-700">
              <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/professional-woman-with-business-charts-and-data-a.jpg"
                  alt="InsureBazaar team and office - Professional insurance experts"
                  className="w-full h-auto transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Our Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Trust & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in complete transparency in our processes, pricing, and policy recommendations. Your trust
                  is our most valuable asset.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every decision we make is centered around what's best for our customers. Your financial security and
                  peace of mind drive our innovation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do - from our technology platform to customer service and
                  insurance expertise.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose InsureBazaar?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-in slide-in-from-left duration-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Our certified insurance advisors help you understand complex policy terms and choose the right
                    coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Price Guarantee</h3>
                  <p className="text-gray-600">
                    We compare prices across all major insurers to ensure you get the best deal available in the market.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick & Easy Process</h3>
                  <p className="text-gray-600">
                    Get quotes in minutes, compare policies side-by-side, and buy insurance online with just a few
                    clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-in slide-in-from-right duration-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">
                    Our customer support team is available round the clock to assist you with policy queries and claims.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Claim Assistance</h3>
                  <p className="text-gray-600">
                    We provide end-to-end support during the claims process to ensure quick and hassle-free settlements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">IRDAI Certified</h3>
                  <p className="text-gray-600">
                    We are certified by IRDAI and follow all regulatory guidelines to ensure complete security and
                    compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          </div>
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/happy-family-with-financial-security.jpg"
                  alt="Award ceremony - Best Insurance Platform"
                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-bold">Economic Times 2023</p>
                  <p className="text-xs">Best Insurance Platform</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/modern-car-with-insurance-protection-shield.jpg"
                  alt="Customer satisfaction award ceremony"
                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-bold">Business Today 2023</p>
                  <p className="text-xs">Customer Choice Award</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/happy-travelers-with-luggage-at-airport.jpg"
                  alt="Digital innovation award presentation"
                  className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-bold">FICCI 2022</p>
                  <p className="text-xs">Digital Innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Best Insurance Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Economic Times 2023</CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Customer Choice Award</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Business Today 2023</CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Digital Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>FICCI 2022</CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Excellence in Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>ASSOCHAM 2022</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="animate-in fade-in duration-700">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">InsureBazaar</span>
              </div>
              <p className="text-gray-400 text-sm">India's leading insurance comparison platform.</p>
            </div>

            <div className="animate-in fade-in duration-700" style={{ animationDelay: "100ms" }}>
              <h3 className="font-semibold mb-4">Insurance Types</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services/health-insurance" className="hover:text-white transition-colors duration-200">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/services/life-insurance" className="hover:text-white transition-colors duration-200">
                    Life Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/services/car-insurance" className="hover:text-white transition-colors duration-200">
                    Car Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/services/travel-insurance" className="hover:text-white transition-colors duration-200">
                    Travel Insurance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-in fade-in duration-700" style={{ animationDelay: "200ms" }}>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-in fade-in duration-700" style={{ animationDelay: "300ms" }}>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Claim Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 animate-in fade-in duration-700"
            style={{ animationDelay: "400ms" }}
          >
            <p>&copy; 2025 InsureBazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
