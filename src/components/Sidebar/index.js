import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentVideo } from "../../features/currentVideo/currentSlice";

export default function Sidebar() {

    const currentVideo = useSelector((state) => state.currentVideo);
    const dispatch = useDispatch();

    let modules = currentVideo.modules;

    return (
        <aside>
            <Accordion w={{ md: "100%", lg: "300px" }} borderRadius="8px" ml={{ md: 0, lg: 2 }} defaultIndex={[0]} >
                {
                    modules.map(module => (
                        <AccordionItem px={2} key={module.id}>
                            <AccordionButton >
                                <Box fontSize={{ base: 35, lg: 18 }} flex='1' textAlign='left'>
                                    {module.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <Stack spacing={2} my={2}>
                                {module.lessons.map(lesson => (
                                    <AccordionPanel
                                        _focus={{
                                            outlineColor: "yellow.300"
                                        }}
                                        fontSize={{ base: 30, lg: 15 }}
                                        py={3}
                                        borderRadius="5px"
                                        display="flex"
                                        align="center"
                                        justify="center"
                                        transition="all .2s"
                                        cursor='pointer'
                                        background={currentVideo.lessonId === lesson.id ? "yellow.300" : "transparent"}
                                        _hover={{ background: currentVideo.lessonId === lesson.id ? "yellow.200" : 'gray.50' }}
                                        onClick={e => dispatch(setCurrentVideo({ moduleId: module.id, lessonId: lesson.id }))}
                                        key={lesson.id}
                                    >
                                        <Text>{lesson.title}</Text>
                                    </AccordionPanel>
                                ))}
                            </Stack>
                        </AccordionItem>
                    ))
                }
            </Accordion>

        </aside>
    )
}