
import {Container,Flex,Heading,Text} from '@radix-ui/themes'

export default function Home() {
  return (
<>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"/>
<Container size="1">
  <Flex direction="column">
    <Heading>Coding Issue Tracker</Heading>
    <Text color="gray">Here you can find the issue relevant ot your certain project</Text>
  </Flex>
</Container>
</>
    
    )
}
