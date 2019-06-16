import { Subscription } from 'rxjs';

export function unsubscribeFn(arraySubscription: Subscription[]) {
  arraySubscription.map(sub => sub.unsubscribe());
}
