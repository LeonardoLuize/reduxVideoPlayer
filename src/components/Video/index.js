import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Video() {


    const isWide = useBreakpointValue({ base: false, lg: true })

    const currentVideo = useSelector((state) => state.currentVideo);

    let moduleIdIndex = currentVideo.moduleId;
    let currentLesson = currentVideo.modules[moduleIdIndex - 1].lessons.filter(x => x.id === currentVideo.lessonId)[0];

    return (
        <Flex>
            <iframe id="video" width={!isWide ? "100%" : "560px"} height={!isWide ? "450px" : "315px"} src={currentLesson.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Flex>
    );
}