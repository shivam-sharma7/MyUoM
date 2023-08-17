/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/

import {
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";

import i18n from "../../i18n";

export default function FoodMenuList({
  mainDish,
  specialDish,
  salad,
  dessert,
}) {
  return (
    <UnorderedList mb="1rem">
      <ListItem>
        <Text as="span" noOfLines={[]}>
          <chakra.b marginRight={"1rem"}>{i18n.t("kyrios")}</chakra.b>
          {mainDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>{i18n.t("xortofagiko")}</chakra.b>
          {specialDish}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>{i18n.t("salata")}</chakra.b>
          {salad}
        </Text>
      </ListItem>
      <ListItem>
        <Text as="span">
          <chakra.b marginRight={"1rem"}>{i18n.t("dessert")}</chakra.b>
          {dessert}
        </Text>
      </ListItem>
    </UnorderedList>
  );
}