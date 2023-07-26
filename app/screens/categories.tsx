import { FlatList, View } from 'native-base'

import bag from '../../assets/images/bag.png'
import clothes from '../../assets/images/clothes.png'
import shoes from '../../assets/images/shoes.png'
import smartphone from '../../assets/images/smartphone.png'

import CategoryCard from '@/components/categoryCard'
import SearchInput from '@/components/searchInput'

export default function CategoriesScreen() {
  const data = [
    {
      id: 1,
      categoryName: 'Smartphones',
      image: smartphone,
    },
    {
      id: 2,
      categoryName: 'Camisetas',
      image: clothes,
    },
    {
      id: 3,
      categoryName: 'Bolsas',
      image: bag,
    },
    {
      id: 4,
      categoryName: 'Sapatos',
      image: shoes,
    },
    {
      id: 5,
      categoryName: 'Eletrônicos',
      image: bag,
    },
    {
      id: 6,
      categoryName: 'Relógios',
      image: bag,
    },
    {
      id: 7,
      categoryName: 'Esportes',
      image: bag,
    },
    {
      id: 8,
      categoryName: 'Relógios',
      image: bag,
    },
  ]

  return (
    <View w={'100%'} bgColor={'#fff'} alignItems={'center'}>
      <SearchInput
        placeholder="Procurar categorias"
        inputProps={{
          marginTop: 50,
          marginBottom: 10,
          w: '90%',
        }}
      />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <CategoryCard
            categoryName={item?.categoryName}
            uriImage={item?.image}
            key={index}
          />
        )}
        w={'90%'}
      />
    </View>
  )
}
