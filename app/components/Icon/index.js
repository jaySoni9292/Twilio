import React from 'react';
import { COLOR } from '../../assets/css/colors';
import { Icon, Rating, CheckBox } from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import Util from '../../utilities/util';

export const Icons = (props) => {
  let {
    name,
    type = 'feather',
    color = COLOR.WHITE,
    size = Util.normalize(15),
    style,
    onPress,
    raised = false,
    reverse = false,
  } = props;
  return (
    <>
      <Icon
        name={name}
        type={type}
        color={color}
        size={size}
        onPress={onPress}
        containerStyle={[style]}
        raised={raised}
        reverse={reverse}
      />
    </>
  );
};

// Icon Type String
// 1.AntDesign(antdesign), 2.Entypo(entypo), 3.EvilIcons(evilicons), 4.Feather(feather), 5.FontAwesome(font-awesome),
// 6.FontAwesome5(font-awesome-5), 7.FontAwesome5Brands(font-awesome-5), 8.Fontisto(fontisto), 9.Foundation(foundation),
// 10.Ionicons(ionicon), 11.MaterialCommunityIcons(material-community), 12.MaterialIcons(material-icons),
// 13.Octicons(octicon), 14.SimpleLineIcons(simple-line-icon), 15.Zocial(zocial)

export const Ratings = (props) => {
  let {
    type = 'custom',
    ratingColor = '',
    ratingBackgroundColor = COLOR.transparent,
    size = Util.normalize(15),
    style,
    startingValue = 0,
    onFinishRating,
    fractions = false,
    readonly = true,
  } = props;
  return (
    <>
      <Rating
        type={type}
        ratingColor={ratingColor}
        ratingBackgroundColor={ratingBackgroundColor}
        startingValue={startingValue}
        imageSize={size}
        readonly={readonly}
        fractions={fractions}
        style={[style]}
        onFinishRating={(rating) => onFinishRating(rating)}
      />
    </>
  );
};

export const Checkbox = (props) => {
  let {
    center = false,
    checked,
    checkedColor = COLOR.THEME_PINK,
    checkedIcon = 'checkbox-active',
    checkedTitle,
    Component,
    style,
    fontFamily,
    iconRight,
    uncheckedIcon = 'checkbox-passive',
    iconType = 'fontisto',
    onIconPress,
    onLongIconPress,
    onLongPress,
    onPress,
    right = false,
    size = Util.normalize(15),
    textStyle,
    title,
    titleProps,
    uncheckedColor = COLOR.THEME_PINK,
  } = props;
  return (
    <>
      <CheckBox
        center={center}
        checked={checked}
        checkedColor={checkedColor}
        checkedIcon={checkedIcon}
        checkedTitle={checkedTitle}
        Component={Component}
        containerStyle={style}
        fontFamily={fontFamily}
        iconRight={iconRight}
        iconType={iconType}
        onIconPress={onIconPress}
        onLongIconPress={onLongIconPress}
        onLongPress={onLongPress}
        onPress={onPress}
        right={right}
        size={size}
        textStyle={textStyle}
        title={title}
        titleProps={titleProps}
        uncheckedColor={uncheckedColor}
        uncheckedIcon={uncheckedIcon}
      />
    </>
  );
};

export const StarRatings = (props) => {
  let {
    activeOpacity = 0.5,
    disabled = true,
    maxStars = 5,
    rating,
    onFinishRating,
    starColor = COLOR.ThemeYellow,
    starSize = Util.normalize(10),
    halfStarEnabled = false,
    style,
    starButtonStyle,
    starStyle,
    emptyStarColor = COLOR.ThemeGray,
  } = props;
  return (
    <>
      <StarRating
        activeOpacity={activeOpacity}
        disabled={disabled}
        emptyStar={'star-o'}
        fullStar={'star'}
        halfStar={'star-half-empty'}
        iconSet={'FontAwesome'}
        maxStars={maxStars}
        rating={rating}
        halfStarEnabled={halfStarEnabled}
        selectedStar={(rating) => onFinishRating(rating)}
        fullStarColor={starColor}
        emptyStarColor={emptyStarColor}
        halfStarColor={starColor}
        starSize={starSize}
        containerStyle={[{ width: Util.normalize(50) }, style]}
        buttonStyle={[starButtonStyle]}
        starStyle={[starStyle]}
      />
    </>
  );
};

// <StarRatings rating={3.6} />
