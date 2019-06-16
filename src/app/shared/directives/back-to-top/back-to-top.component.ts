import { Component, HostListener, Input, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('appearInOut', [
      state('in', style({
        'display': 'block',
        'opacity': '0.85'
      })),
      state('out', style({
        'display': 'none',
        'opacity': '0'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ],
})
export class BackToTopComponent implements OnInit {

  // Strongly inspired by https://github.com/annapogorelova/ng2-go-top-button

  animationState = 'out';

  /**
   * Go top button will appear when user scrolls Y to this position.
   * Must be greater or equal to 0.
   * @type {number}
   */
  @Input() scrollDistance = 200;

  /**
   * If true scrolling to top will be animated
   * @type {boolean}
   */
  @Input() animate = true;

  /**
   * Animated scrolling speed.
   * Must be a positive number.
   * @type {number}
   */
  @Input() speed = 80;

  /**
   * Acceleration coefficient, added to speed when using animated scroll.
   * Must be greater or equal to 0.
   * @type {number}
   */
  @Input() acceleration = 0;

  constructor(private ngZone: NgZone) {
  }
  ngOnInit() {
  }

  /**
   * Listens to window scroll and animates the button
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser()) {
      this.animationState = (document.documentElement.scrollTop > this.scrollDistance) ? 'in' : 'out';
    }
  }

  /**
   * Scrolls window to top
   * @param event
   */
  scrollTop(event: any) {
    if (!this.isBrowser()) {
      return;
    }

    event.preventDefault();
    if (this.animate) {
      this.ngZone.runOutsideAngular(
        () => requestAnimationFrame(
          () => this.animateScrollTop(this.speed)
        )
      );
    } else {
      window.scrollTo(0, 0);
    }
  }

  /**
   * Performs the animated scroll to top
   */
  private animateScrollTop(currentSpeed: number) {
    window.scrollBy(0, -currentSpeed);
    currentSpeed += this.acceleration;
    if (document.documentElement.scrollTop > 0) {
      requestAnimationFrame(() => this.animateScrollTop(currentSpeed));
    }
  }

  /**
   * This check will prevent 'window' logic to be executed
   * while executing the server rendering
   * @returns {boolean}
   */
  isBrowser(): boolean {
    return typeof (window) !== 'undefined';
  }
}
