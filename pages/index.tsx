import type { NextPage } from "next"
import Head from "next/head"
import { Text } from "@mantine/core"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Legal Dove</title>
                <link rel="icon" href="" /> {/* add path to logo */}
            </Head>
            <Text size="xl">Hello World</Text>
        </>
    )
}

export default Home
