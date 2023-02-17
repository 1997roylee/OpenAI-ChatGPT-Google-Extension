import { Image, ImageProps } from "@chakra-ui/react"

const data =
    'data:image/png;base64,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'

export const OpenAi = (props: ImageProps): JSX.Element => {
    return (
        <Image
            {...props}
            src={data}
            sx={{
                margin: 0,
            }}
            alt='Open AI'
        />
    )
}
