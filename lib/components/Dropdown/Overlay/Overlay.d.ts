import React, { ReactNode, RefObject } from 'react';
import { Override } from '../../../shared';
import { HorizontalPosition, VerticalPosition } from '../../../hooks';
declare type OverlayProps = Override<React.HTMLAttributes<HTMLDivElement>, {
    verticalPosition?: VerticalPosition;
    horizontalPosition?: HorizontalPosition;
    dropdownOpenerVisible?: boolean;
    onClose: () => void;
    children: ReactNode;
    parentRef?: RefObject<HTMLDivElement>;
}>;
declare const Overlay: {
    ({ verticalPosition, horizontalPosition, dropdownOpenerVisible, parentRef, onClose, children, ...rest }: OverlayProps): React.ReactPortal;
    displayName: string;
};
export { Overlay };
