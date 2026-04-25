import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Mars,
  Globe,
  FileText,
} from "lucide-react";
import IconBox from "./ui/IconBox";
import CopyButton from "./ui/CopyButton";
import TimeClock from "./ui/Clock";

export default function InfoBox() {
  return (
    <>
      <div className="innerContainer min-h-[25vh] p-4 py-6 font1 tracking-tighter grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex items-center gap-2 group">
            <IconBox>
              <Mail className="size-3.5" />
            </IconBox>
            <a
              href="mailto:rhythmdoshi04@gmail.com?subject=Let's connect&body=Hi Rhythm,"
              className="hover:underline"
            >
              rhythmdoshi04@gmail.com
            </a>
            <CopyButton text="rhythmdoshi04@gmail.com" />
          </div>

          <div className="flex items-center gap-2 group">
            <IconBox>
              <Phone className="size-3.5" />
            </IconBox>
            <a href="tel:+91-9981603789" className="hover:underline">
              +91-9981603789
            </a>
            <CopyButton text="+91-9981603789" />
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <MapPin className="size-3.5" />
            </IconBox>
            <a
              href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh/@23.1996391,77.2407346,11z/data=!3m1!4b1!4m6!3m5!1s0x397c428f8fd68fbd:0x2155716d572d4f8!8m2!3d23.2599333!4d77.412615!16zL20vMGN3NTE?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline"
            >
              Bhopal, India
            </a>
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <Clock className="size-3.5" />
            </IconBox>
            <div className="hover:underline">
              <TimeClock />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center md:items-start mt-4 md:mt-0">
          <div className="flex items-center gap-2 relative">
            <IconBox>
              <FileText className="size-3.5" />
            </IconBox>
            {/* <a href="/Rhythmdoshi.pdf" download className="hover:underline"> */}
            <a href="https://drive.google.com/file/d/1s577zCH_64Ptij627SRhIrtKLQMWZcrN/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Resume
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IconBox>
              <Mars className="size-3.5" />
            </IconBox>
            <h3>He/him</h3>
          </div>

          <div className="flex items-center gap-2">
            <IconBox>
              <Globe className="size-3.5" />
            </IconBox>
            <a href="https://rhythmdoshi.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline">
              rhythmdoshi.xyz
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
