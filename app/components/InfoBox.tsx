import {
  Mail,
  Phone,
  MapPin,
  Clock,
  User,
  Globe,
  FileText,
} from "lucide-react";
import IconBox from "./ui/IconBox";

export default function InfoBox() {
    return (
        <>
            <div className="innerContainer h-[25vh] p-4 py-6 font1 tracking-tighter grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex items-center gap-2">
              <IconBox>
                <Mail className="size-3.5" />
              </IconBox>
              <h2>rhythmdoshi04@gmail.com</h2>
            </div>

            <div className="flex items-center gap-2">
              <IconBox>
                <Phone className="size-3.5" />
              </IconBox>
              <h2>+91-9981603789</h2>
            </div>

            <div className="flex items-center gap-2">
              <IconBox>
                <MapPin className="size-3.5" />
              </IconBox>
              <h2>Bhopal, India</h2>
            </div>

            <div className="flex items-center gap-2">
              <IconBox>
                <Clock className="size-3.5" />
              </IconBox>
              <h2>11:10</h2>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center md:items-start mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <IconBox>
                <User className="size-3.5" />
              </IconBox>
              <h2>He/him</h2>
            </div>

            <div className="flex items-center gap-2">
              <IconBox>
                <Globe className="size-3.5" />
              </IconBox>
              <h2>rhythmdoshi.site</h2>
            </div>

            <div className="flex items-center gap-2">
              <IconBox>
                <FileText className="size-3.5" />
              </IconBox>
              <h2>Resume</h2>
            </div>
          </div>
        </div>
        </>
    )
}