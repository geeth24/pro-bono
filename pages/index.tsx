import type { NextPage } from "next"
import Head from "next/head"
import { Group, Text, Image } from "@mantine/core"

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Pro Bono</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <Group>
                <Image width={200} src="/logo.svg" />

                <Group position="right"></Group>
            </Group>
        </>
    )
}

export default Home
