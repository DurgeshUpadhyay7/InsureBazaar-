"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, User, Shield, Heart, Car, Plane, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Services
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-in slide-in-from-top duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <Link
                  href="/services/health-insurance"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Health Insurance
                </Link>
                <Link
                  href="/services/life-insurance"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Life Insurance
                </Link>
                <Link
                  href="/services/car-insurance"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Car Insurance
                </Link>
                <Link
                  href="/services/travel-insurance"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Travel Insurance
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left duration-700">
              <div className="flex items-center mb-4">
                <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-100">
                  Most Popular
                </Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">Health Insurance Plans</h1>
              <p className="text-lg text-gray-600 mb-8 text-pretty">
                Compare and buy the best health insurance plans from top insurers. Get comprehensive medical coverage
                for you and your family.
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
              <div className="relative group overflow-hidden rounded-lg shadow-2xl">
                <img
                  src="/professional-woman-with-business-charts-and-data-a.jpg"
                  alt="Insurance professional with business analytics"
                  className="w-full h-auto transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Health Insurance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Health Insurance?</h2>
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
                <CardTitle>Cashless Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get treatment at network hospitals without paying upfront. Direct settlement with insurance company.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Pre & Post Hospitalization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Coverage for medical expenses and other hospitalization costs as per policy terms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Family Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Single policy to cover your entire family including spouse, children and parents.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Insurance Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Health Insurance Plans</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* HDFC ERGO Plan */}
            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "100ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">HDFC ERGO</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                </div>
                <CardDescription>My Health Suraksha</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹8,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sum Insured</span>
                    <span className="font-semibold">₹5 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Cashless Treatment</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Pre-Post Hospitalization</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Day Care Procedures</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ICICI Lombard Plan */}
            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">ICICI Lombard</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.3</span>
                  </div>
                </div>
                <CardDescription>Complete Health Options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sum Insured</span>
                    <span className="font-semibold">₹10 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Worldwide Coverage</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Health Check-ups</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Maternity Benefits</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Star Health Plan */}
            <Card
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Star Health</CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.4</span>
                  </div>
                </div>
                <CardDescription>Family Health Optima</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Annual Premium</span>
                    <span className="font-semibold">₹15,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Sum Insured</span>
                    <span className="font-semibold">₹15 Lakh</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>No Room Rent Capping</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Organ Transplant</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Mental Health Coverage</span>
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

      {/* All Insurance Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-in fade-in duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Insurance Types</h2>
            <p className="text-lg text-gray-600">Comprehensive coverage for all your insurance needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/health-insurance" className="group">
              <Card
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-500 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: "100ms" }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-200 transition-colors duration-200">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                    Health Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Medical coverage for you and your family</CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/life-insurance" className="group">
              <Card
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-500 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: "200ms" }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-200">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                    Life Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Financial security for your loved ones</CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/car-insurance" className="group">
              <Card
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-500 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: "300ms" }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                    Car Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Complete protection for your vehicle</CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/travel-insurance" className="group">
              <Card
                className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group-hover:border-blue-500 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: "400ms" }}
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                    <Plane className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-200">
                    Travel Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Safe travels with comprehensive coverage</CardDescription>
                </CardContent>
              </Card>
            </Link>
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
              <p className="text-gray-400 text-sm">
                India's leading insurance comparison platform. Compare, choose and buy the best insurance policies.
              </p>
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Blog
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
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400 animate-in fade-in duration-700"
            style={{ animationDelay: "400ms" }}
          >
            <p>&copy; 2025 InsureBazaar. All rights reserved. | IRDAI Registration No: 12345678</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
