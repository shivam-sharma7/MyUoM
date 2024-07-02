import { FIRST_FLOOR_IMG_URL, MEZZANINE_FLOOR_IMG_URL } from "./floor_images";
import i18n from "../../../i18n";
import elevator from "./elevator_positions";

const locations = [
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "01",
    marked_position_x: 138,
    marked_position_y: 138,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "02",
    marked_position_x: 103,
    marked_position_y: 135,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "03",
    marked_position_x: 58,
    marked_position_y: 130,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "04",
    marked_position_x: 19,
    marked_position_y: 122,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "05",
    marked_position_x: 56,
    marked_position_y: 44,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "06",
    marked_position_x: 92,
    marked_position_y: 50,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "07",
    marked_position_x: 138,
    marked_position_y: 57,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "08",
    marked_position_x: 173,
    marked_position_y: 64,
    ...elevator.gym,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "09",
    marked_position_x: 215,
    marked_position_y: 68,
    ...elevator.library,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: "10",
    marked_position_x: 253,
    marked_position_y: 75,
    ...elevator.library,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "11",
    marked_position_x: 60,
    marked_position_y: 94,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "12",
    marked_position_x: 43,
    marked_position_y: 90,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "13",
    marked_position_x: 23,
    marked_position_y: 88,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "14",
    marked_position_x: 30,
    marked_position_y: 70,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "15",
    marked_position_x: 50,
    marked_position_y: 72,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("mezzanine_floor"),
    imageURL: MEZZANINE_FLOOR_IMG_URL,
    title: "16",
    marked_position_x: 68,
    marked_position_y: 77,
    ...elevator.restaurant,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("conference_room"),
    marked_position_x: 294,
    marked_position_y: 122,
    ...elevator.library,
  },
  {
    floor: i18n.t("first_floor"),
    imageURL: FIRST_FLOOR_IMG_URL,
    title: i18n.t("remote_education_room"),
    marked_position_x: 255,
    marked_position_y: 117,
    ...elevator.library,
  },
];

export default locations;