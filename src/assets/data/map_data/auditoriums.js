import { GROUND_FLOOR_IMG_URL, FIRST_FLOOR_IMG_URL } from "./floor_images";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";


 const  locations = [
  {
    floor: i18n.t("ground_floor"),
    imageURL: GROUND_FLOOR_IMG_URL,
    title: i18n.t("ceremony_hall_for_navigation"),
    marked_position_x: 298,
    marked_position_y: 129,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor"),
    imageURL: GROUND_FLOOR_IMG_URL,
    title: "02",
    marked_position_x: 168,
    marked_position_y: 52,
    ...elevator.none,
  },
  {
    floor: i18n.t("ground_floor"),
    imageURL: GROUND_FLOOR_IMG_URL,
    title: "03",
    marked_position_x: 218,
    marked_position_y: 61,
    ...elevator.none,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "04",
    marked_position_x: 144,
    marked_position_y: 123,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "05",
    marked_position_x: 110,
    marked_position_y: 118,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "06",
    marked_position_x: 63,
    marked_position_y: 111,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "07",
    marked_position_x: 29,
    marked_position_y: 105,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "08",
    marked_position_x: 50,
    marked_position_y: 60,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "09",
    marked_position_x: 85,
    marked_position_y: 69,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "10",
    marked_position_x: 130,
    marked_position_y: 76,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "11",
    marked_position_x: 165,
    marked_position_y: 80,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "12",
    marked_position_x: 210,
    marked_position_y: 87,
    ...elevator.library,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "13",
    marked_position_x: 244,
    marked_position_y: 95,
    ...elevator.library,
  },
];

export default locations;