import {ConsecutiveDaysTimeframe} from '../../../../../main/angular/src/app/schedule/timeframe/consecutivedays/consecutive-days-timeframe';
import {
  assertInput,
  assertSelect,
  inputText,
  selectOptionByAttribute,
  selectorInputByFormControlName,
  selectorSelectByFormControlName, selectorSelectedByFormControlName
} from '../../shared/form';
import {TimeUtil} from '../../../../../main/angular/src/app/shared/time-util';
import {getTranslation} from '../../shared/ngx-translate';

export class ConsecutiveDaysTimeframePage {

  public static async setConsecutiveDaysTimeframe(t: TestController, consecutiveDaysTimeframe: ConsecutiveDaysTimeframe,
                                                  selectorPrefix: string) {
    await this.setStartDayOfWeek(t, consecutiveDaysTimeframe.start.dayOfWeek, selectorPrefix);
    await this.setStartTime(t, TimeUtil.timestringFromTimeOfDay(consecutiveDaysTimeframe.start.time), selectorPrefix);

    await this.setEndDayOfWeek(t, consecutiveDaysTimeframe.end.dayOfWeek, selectorPrefix);
    await this.setEndTime(t, TimeUtil.timestringFromTimeOfDay(consecutiveDaysTimeframe.end.time), selectorPrefix);
  }
  public static async assertConsecutiveDaysTimeframe(t: TestController, consecutiveDaysTimeframe: ConsecutiveDaysTimeframe,
                                                  selectorPrefix: string) {
    await this.assertStartDayOfWeek(t, consecutiveDaysTimeframe.start.dayOfWeek, selectorPrefix);
    await this.assertStartTime(t, TimeUtil.timestringFromTimeOfDay(consecutiveDaysTimeframe.start.time), selectorPrefix);

    await this.assertEndDayOfWeek(t, consecutiveDaysTimeframe.end.dayOfWeek, selectorPrefix);
    await this.assertEndTime(t, TimeUtil.timestringFromTimeOfDay(consecutiveDaysTimeframe.end.time), selectorPrefix);
  }

  public static async setStartDayOfWeek(t: TestController, startDayOfWeek: number, selectorPrefix: string) {
    await selectOptionByAttribute(t, selectorSelectByFormControlName('startDayOfWeek', selectorPrefix), startDayOfWeek.toString());
  }
  public static async assertStartDayOfWeek(t: TestController, startDayOfWeek: number, selectorPrefix: string) {
    await assertSelect(t, selectorSelectedByFormControlName('startDayOfWeek', selectorPrefix),
      ConsecutiveDaysTimeframePage.toDayOfWeekString(startDayOfWeek));
  }

  public static async setStartTime(t: TestController, startTime: string, selectorPrefix: string) {
    await inputText(t, selectorInputByFormControlName('startTime', selectorPrefix), startTime);
    await t.pressKey('esc'); // close multi select overlay
  }
  public static async assertStartTime(t: TestController, startTime: string, selectorPrefix: string) {
    await assertInput(t, selectorInputByFormControlName('startTime', selectorPrefix), startTime);
  }

  public static async setEndDayOfWeek(t: TestController, endDayOfWeek: number, selectorPrefix: string) {
    await selectOptionByAttribute(t, selectorSelectByFormControlName('endDayOfWeek', selectorPrefix), endDayOfWeek.toString());
  }
  public static async assertEndDayOfWeek(t: TestController, endDayOfWeek: number, selectorPrefix: string) {
    await assertSelect(t, selectorSelectedByFormControlName('endDayOfWeek', selectorPrefix),
      ConsecutiveDaysTimeframePage.toDayOfWeekString(endDayOfWeek));
  }

  public static async setEndTime(t: TestController, endTime: string, selectorPrefix: string) {
    await inputText(t, selectorInputByFormControlName('endTime', selectorPrefix), endTime);
    await t.pressKey('esc'); // close multi select overlay
  }
  public static async assertEndTime(t: TestController, endTime: string, selectorPrefix: string) {
    await assertInput(t, selectorInputByFormControlName('endTime', selectorPrefix), endTime);
  }

  private static toDayOfWeekString(dow: number) {
    switch (dow) {
      case 1:
        return getTranslation('monday', 'daysOfWeek_');
      case 2:
        return getTranslation('tuesday', 'daysOfWeek_');
      case 3:
        return getTranslation('wednesday', 'daysOfWeek_');
      case 4:
        return getTranslation('thursday', 'daysOfWeek_');
      case 5:
        return getTranslation('friday', 'daysOfWeek_');
      case 6:
        return getTranslation('saturday', 'daysOfWeek_');
      case 7:
        return getTranslation('sunday', 'daysOfWeek_');
      case 8:
        return getTranslation('holiday', 'daysOfWeek_');
    }
  }
}
