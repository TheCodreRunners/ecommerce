import { HStack, Image, Text } from 'native-base'

interface Props {
  categoryName?: string
  uriImage?: any
}

export default function CategoryCard({
  categoryName,
  uriImage,
}: Props) {
  return (
    <HStack
      bgColor={'#66666625'}
      mb={'20px'}
      h={'90px'}
      borderRadius={20}
      justifyContent={'space-between'}
      alignItems={'center'}
      overflow={'hidden'}
      px={'20px'}
    >
      <Text fontSize={'18px'} fontWeight={800}>
        {categoryName}
      </Text>
      <Image source={uriImage} size={'100px'} alt="img" />
    </HStack>
  )
}
