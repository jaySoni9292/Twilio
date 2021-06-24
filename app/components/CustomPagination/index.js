import React, {useState} from 'react';
import {FlatList} from 'react-native';

export function CustomPagination(props) {
  const {
    style,
    contentContainerStyle,
    data,
    extraData,
    horizontal = false,
    numColumns,
    showsHorizontalScrollIndicator = false,
    showsVerticalScrollIndicator = false,
    onRefresh = false,
    limit,
    renderItem,
  } = props;

  const length = data.length;
  const [lowerL, setLowerL] = useState(0);
  const [higherL, setHigherL] = useState(limit - 1);
  const [tempList, setTempList] = useState(data.slice(lowerL, higherL));

  function onEndReached() {
    if (tempList.length < length) {
      if (higherL + limit < length) {
        setTempList(
          tempList.concat(data.slice(lowerL + limit, higherL + limit)),
        );
        setLowerL(lowerL + limit);
        setHigherL(higherL + limit);
      } else {
        setHigherL(data.length);
      }
    }
  }

  return (
    <>
      <FlatList
        style={style}
        contentContainerStyle={contentContainerStyle}
        data={tempList}
        extraData={tempList}
        horizontal={horizontal}
        numColumns={numColumns}
        onEndReached={() => {
          onEndReached();
        }}
        renderItem={({item, index}) => renderItem(item, index)}
        onRefresh={onRefresh}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        keyExtractor={(item) => item + Math.random()}
      />
    </>
  );
}
