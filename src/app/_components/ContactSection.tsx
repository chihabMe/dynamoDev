import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a202c]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Ready to elevate your digital presence? Contact us today and let's discuss your project.
            </p>
          </div>
          <div className="mx-auto grid gap-8 md:grid-cols-2 lg:gap-12 items-start max-w-6xl">
            <Card className="bg-[#1e2837] border-[#2d3748]">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Input
                      className="bg-[#2d3748] border-[#4a5568] text-white"
                      placeholder="Name"
                      type="text"
                    />
                    <Input
                      className="bg-[#2d3748] border-[#4a5568] text-white"
                      placeholder="Email"
                      type="email"
                    />
                    <Textarea
                      className="min-h-[150px] bg-[#2d3748] border-[#4a5568] text-white"
                      placeholder="Your message"
                    />
                  </div>
                  <Button className="w-full bg-[#00ddb3] hover:bg-[#00c09b] text-black">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="mt-0.5 h-6 w-6 text-[#00ddb3]" />
                  <div className="space-y-1">
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-sm text-gray-400">contact@dynamodev.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-0.5 h-6 w-6 text-[#00ddb3]" />
                  <div className="space-y-1">
                    <h3 className="font-medium text-white">Phone</h3>
                    <p className="text-sm text-gray-400">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-0.5 h-6 w-6 text-[#00ddb3]" />
                  <div className="space-y-1">
                    <h3 className="font-medium text-white">Location</h3>
                    <p className="text-sm text-gray-400">123 Developer Street<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

