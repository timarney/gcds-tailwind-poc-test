import { FipEnSignature } from "./Signature";

export const Header = () => {
  return (
    <div class="gcds-header__brand">
      <div class="brand__container">
        <section class="brand__toggle">
          <a lang="en" href="#" class="">
            Français
          </a>
        </section>
        <div class="brand__signature mb-6">
          <a href="#" class="gcds-signature">
            <FipEnSignature />
          </a>
        </div>
      </div>
    </div>
  );
};
