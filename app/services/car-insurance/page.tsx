"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, Star, Phone, User, Wrench, Zap, FileText } from "lucide-react"

export default function CarInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
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
                <button className="text-blue-600 px-3 py-2 text-sm font-medium">Services</button>
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
                    <Link href="/services/car-insurance" className="block px-4 py-2 text-sm text-blue-600 bg-blue-50">
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
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-600 hover:bg-blue-100">
                  Vehicle Protection
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">Car Insurance Plans</h1>
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                Comprehensive protection for your vehicle with third-party liability, own damage coverage, and add-on
                benefits. Get instant quotes online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
                >
                  Get Free Quotes
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-blue-50 transition-all duration-200 bg-transparent"
                >
                  Compare Plans
                </Button>
              </div>
            </div>
            <div className="animate-in slide-in-from-right duration-700">
              <img
                src="/modern-car-with-insurance-protection-shield.jpg"
                alt="Car insurance protection"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Car Insurance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Car Insurance?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Legal Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Third-party insurance is mandatory by law. Avoid legal penalties and fines with proper coverage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Repair Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive coverage for vehicle repairs, replacement parts, and accident damages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Quick Claims</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fast claim processing with cashless garage network and 24/7 roadside assistance.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Car Insurance Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Bajaj Allianz</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.3</span>
                  </div>
                </div>
                <CardDescription>Motor Package Policy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹8,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IDV</span>
                    <span className="font-semibold">₹6.5 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Own Damage Cover</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Third Party Liability</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Personal Accident Cover</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">HDFC ERGO</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                </div>
                <CardDescription>Motor Comprehensive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹9,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IDV</span>
                    <span className="font-semibold">₹7.2 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Zero Depreciation</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Engine Protection</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Roadside Assistance</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">ICICI Lombard</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.4</span>
                  </div>
                </div>
                <CardDescription>Comprehensive Car Policy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹7,800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">IDV</span>
                    <span className="font-semibold">₹6.8 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Return to Invoice</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Key Replacement</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Consumables Cover</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    View Details
                  </Button>
                </div>
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
