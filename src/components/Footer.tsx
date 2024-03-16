import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
    return (
        <footer className="lh-footer">
            <Container>
                <div className="lh-footer__inner">
                    <Image src="/images/ReactWhite.svg" className="lh-footer__logo" alt="Footer logo"
                           width={176} height={48}/>

                    <div className="flex-1">
                        <div className="lh-footer__social">
                            <Link href="/" className="lh-footer__social-link">
                                <Image src="/images/icons/SocialIcon.svg" alt="Social icon" width={24}
                                       height={24}/>
                            </Link>
                            <Link href="/" className="lh-footer__social-link">
                                <Image src="/images/icons/SocialIcon-1.svg" alt="Social icon" width={24}
                                       height={24}/>
                            </Link>
                            <Link href="/" className="lh-footer__social-link">
                                <Image src="/images/icons/SocialIcon-2.svg" alt="Social icon" width={24}
                                       height={24}/>
                            </Link>
                            <Link href="/" className="lh-footer__social-link">
                                <Image src="/images/icons/SocialIcon-3.svg" alt="Social icon" width={24}
                                       height={24}/>
                            </Link>
                        </div>
                        <p className="lh-footer__copyright">
                            © 2023 Lemonhive. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
