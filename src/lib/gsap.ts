"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register once on the client. Safe to call repeatedly.
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin };
