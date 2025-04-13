import useEmblaCarousel from "embla-carousel-react";
import styles from "./index.module.css";
import cc from "@/shared/lib/helpers/cc.js";
import {Text} from "@/shared/ui/Text/index.jsx";
import AutoScroll from "embla-carousel-auto-scroll";

export function SloganCarousel({ className, ...rest }) {
    const slogan = "#uglybitchesstayathome"
    const autoScroll = AutoScroll({startDelay: false, direction: "forward", stopOnFocusIn: false, })
    const [emblaRef] = useEmblaCarousel({loop: true, dragFree: false, align: "center", watchDrag: false}, [autoScroll])

    const messages = Array(30).fill(null).map(
        (_, i) => ({id: i, message: slogan })
    );

    return (
        <div className={cc(className, styles.embla)} ref={emblaRef} {...rest}>
            <div className={styles.container}>
                {messages.map((item) => (
                    <Text key={item.id} className={cc(styles.message)}>{item.message}</Text>
                ))}
            </div>
        </div>
    )
}