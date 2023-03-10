import {
    Animator,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

const ScrollTest = () =>{
    return (
        <ScrollContainer>
            

            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <h2>I'm, FadeUpScrollOut โจ</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <h2>I'm FadeUp โ๏ธ</h2>
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <div className="section-3">
                    <h2>
                        <Animator animation={MoveIn(-1000, 0)}>Hello guys๐๐ป</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you ๐ฑ๐ปโโ๏ธ</Animator>
                        <Animator animation={MoveOut(1000, 0)}>Good Bye โ๐ป</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>See you ๐งก</Animator>
                    </h2>
                </div>
            </ScrollPage>

            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky())}>
                    <h2>Done โ</h2>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
    );
}

export default ScrollTest;