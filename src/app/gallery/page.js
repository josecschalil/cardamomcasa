"use client";
import { useState } from "react";
import { Lora } from "next/font/google";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Search,
  Share2,
} from "lucide-react";
const lora = Lora({
  weight: "600",
  subsets: ["latin"],
});
const GalleryOfSerenity = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_HAHdr-Fw-Yl3irrQM7gidt6Nxueas3iXQvaAUS7BFaOxP30Ib18NNs-bNGjI5zMh8-WxezQF_y3lZsMAomZdpW1LwItTyHfLaPM-cSLdgIMH-eO4YkOuHfSPK-tfw0B3a8WSrmvSffbdz4GhhAgp3CNETkSLXXiBafaxJmwGM8Le6I3ZmcST1GUmnqMEAwcJpX9BOSGudrX3mrpXJMTsGrf4VGRINTesArlXgS7xKrkkPnfeE6ER-ll5VtOXhbB9NHiO3_jYf4FuznEwLJ92-7knFFsUtJSgR0EyHj7qQ6P4dlztltyRm0ENon-ZPmCPFVuywpCD6rnXjq3lEAppcKXdAtnKS5Bx4oM4Onolr8dj3eGwFPSTpsHwTfYMUuibSYwOeEvyhEl8YuR8JlbZPKELMauZQ2PncHqr96AiLsP4HvTY79rEmPGEKHzEiVJkDw7kShFhYvxvUkxALcGRsqt-evP0mZln8MFsx5JxevRHwdOEjQgJCp-05dcx81ALanCQPxxg2TEV_iYnXDlmI4jTaIpZxaNmhYEHmQ38bLR6LkcBfAnZDuvbjgl3BpWLs2F4L5shlK6NYW5DE2M7MepZk8g6lXGKUnSxqCrL_1M5Kr2EOHEgiPgHQzmWtuovwK6xUYJmK73yCNebV0XAduthZSPOfjunULuwQ6RRWPLgaNXUzKjhrYXctZsj2skcRlLj-rZfpgITts0gd0X2AfsC2ucjVmLyvkRMIZnuCVMJvJh3BmEzz3CBxErF4gmZib6LkL_OW3AvUzJJ5T8pqiwdulIiiRI4jUA3KXY8LpU5WeRklZmw2UQvXelHWDQf5-QCnNj-6BRcZ6om7VnvCN7-I-bhOhC9He6BKoYumpzWwdiDDCf9rKzZtk7e1UC57epP_j06tDggymp6Rmi10F3ChDaszE3I9oZ47xS5f9F14YWiRfon_hKIhY_vp4tw_7kl4PdNY44oDQ_ok1e5tA4g=w1213-h968?auditContext=forDisplay",
      alt: "Luxury bedroom with mountain view",
      size: "large",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_FPW8YBOPsg-I8ODds7gZu4Hf1AWh1XB5M_H906KWM9Ua_QgSRt09eyUdWA1nsRaeXjjlMd1WGildMGmuavG3EhUaOWpRQ80eux0IVAVca0k-eqjMOC1ifAi2pscjuUg-krVqOirVziwyj8x4rlD3JCB8PWiH2mC4s5QnSThUjpdzvP3e_Xgmb5bXKYUxwviooth1oabsT5jQ_AP4LThiAdS18AdHMxDS7CBc27-rqR_7_lShoSFXcswVxcN8r07HJWJ2PO7cfI0goWVj-0DsfEzpo-IFK0dWwhyxAYXxMUbIVgMItyvQW_GZB10oYS81XqZoYXvB89xbHt-frLHOUT5yk4mvdFhCjB2zsI9DTqe_dqdmOoi7j7oOvxzMyIRGTj1DrlZl6yPnBbxLN5_xvu6V622xPE-PG_X4IjgtYPPNKTF4EGeQzLF9ryisBEzXjWUBBkHnGHcmrrdbobRZI0zgWm8q_mabyWy7yiCCIs29GhoR_9Cq6t1r-fyqdTqTkYJk3g5YHs2CgMHtz7ggHnbAeT2DkBN30VY4R65CkwIYXEjSvNpjXzK-06HKikUgmhr0vYS6NGjn9jI8PlRndoaCSlVXYGLtVFNXqj_10Yr6CkEHVmi5n0TiprdGFPxTPPEYi-LcdA-Zei-uXy5tFZoGEEmpxgrl05e7WwYFW4sb-i7_RrpC4adfDC_eqzNh9RAzYMn1NoHNKubQzr-GG__jFSaGmOnigVoKPMEEiATKJ7-Zub6xoyQ3Dva25b50Ztr8HpanR5sVHWatC46BI9XD-bg42FXXThlvo6_tRxCg6T5D3e9PSTgwxZNwCYOELqnyRnSY9vQJnmsX0tiqhdZl6ldmemdTz0dfqyICVkmeuCibFDmUZCHKCWwzNB1jNk6CC7Jcgu7C5awVn28G5_GZ-ss6pCaRj6HaF0mScvJUXmmcPDpsgxSp_F2TWBp5PfS15jkBfluDb0NEr7sXNJNw=w1213-h968?auditContext=forDisplay",
      alt: "Modern kitchen with blue cabinets",
      size: "medium",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_FeKkaVE1HUtCTOzyp-Xm47lAHg8qsYH5YEV5FCPamPBGzp3rczxMynnkNMjO0oAtlOjVoXoOBcnmOk_Kfl_zRscOVeVR0sGeiVvE65SX632qofrUh_SG8SX2nZ7sPRRL0HV6c-kuMj7KRq1UwdoEyQYVsp3k8nqS-_86hj2RgzV9D36qNUaBucQ2G8QnWMX2GewSyKs2Kcc48fImvd3VRJkm6l-D2XMEY1WE1Q4vnAqVCfCnXmvP9xAAHeCTkBI51aThW5ICYD9udgqTg6zgDxHu3tYr0fQ-Idib93qQxZdqfx_W1jZ8Wxq24fos23ZiCKuCrYQK_E63ixj-4Bj-N1U0cXGeEy2rsMyrlTxRDqN4THP3uECl_M2FPeRDAt42o9iCzuqA1NbkQI7zUhmWOSLYM_A-8StDzr81MYMT2r4oeu9OplhHCD0ogHUlvRqYwxfjWiGrmY_NRjfYyX2WdmUD_suN0v-LONNl66rF35yx7HVG5CN4MoR-X89mo45cAXcEghbhRxNpqjMeYoZahHut7Du0u5DtVUAZpoN4Gor1YxXhZNvPc8-FJf_gfjqPUHY-wmOxGn60OKxpVkW63Cl5Afkl-EHaER_3csT2TpZg0aOJxStsSNa_AqVqL6-Ga2WBi4lIRKutvxReTPgQuhkHThLb2ao1ayDIRamKV02ht9TXZTi65-1-enioYgthAvvSVNOnIw1qWCs6pCpeXqaAVV6gPaGflolP0IecIjAjU8KjCVrh9GWFKCuAaspkXQYmHnhgKL_kXW9qNkBk1rj-wpq11bswwLsEsgAO2kt3CNocWMM0I3L3kbdrzu-KZG82XRHCnIFPgryD5sVTIbqGccjcV74Zb3KdDf5xpFF9cTJBErKfReQZFZYPOjpBwDUkQFJ1e0cerqIT-Z3DncdNVa5oFh6B8B5P4a0TxXNeJrJMhnJ6P-ZrJ-jk0FEsvyqlsb4KhSQhPb8bHlg6nJtw=w1213-h968?auditContext=prefetch",
      alt: "Balcony with mountain view",
      size: "tall",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_HUDc5W3XUOkXr4X2b1mbp4VO_UBAFUFUWWwmFxFJI5h7MlLyR7hjjiehkqOdTEc4okpwmYfyUJiNbPXI0cfVg0EU7ne2sDNHRTaiuDxBEPIhIltsKNmRAfbK_WQGFh6OFPjoRleMinRbZS39fB5G49D2OLdWyAjxnkjjkEQ5ZyB5Po_zPA-uF7FuxlMtNS1y6TNZaNua-IJ-BTQurlO1qHGAEF2ZZEbzzwLJ9LL-RJaoBBNLe_E20qWuXejrI8ZVODS5KQZ9yMmT5GjZk7eRg5iJeAyuEpsZ1kLxkZvdAfETsr_vfc21bK2BOQw53k0Juf50mdgE_t3loiZFDx5nrbzMueBeRmw1Vd5WxRr_2iMJ6iImIg7dKJBH3idq1mE2nYpCPUWy-ec1ewZ4fY6I6RJnWnc_hHLiCCMjCAkr-HirRToSkpBIxIuKP-5Y9BmUNuK4xLHZtyOG2VS2cXS66ISsXSBvKC8jMu3VEPRVW89th3zcZWA5O2dydYW_km8OjBLeQ0GuID0_HEZEJHcd5g33LmKU7C8bJ2ZVJgqLJx4OFJHO6UWawpGMN088fG9VROmW12lA9hZ4yzRLLq_kv3KhkxKsWCo7zVwEvcpNHGyj-iLx_pJdzhWZzq4gOcXuGo3lTkgkFb8knxDwsY9sXitVlfGR-5a2sXJNYcNH3td9n-4UekA7SA-Z-yiB1MAscKsIXu68WRYRJsEiGhXGW4F1B9nWHjn5Og2J5Py42EvL6VsTsRg3D97aHSQK5wRxitoJOOBkViNfrDmjjS141C5LjVZgbHJD2_q7Dxww7vZdTFvGdj5F8EZz0DEmzT8Mup02404XtzttEF9lwAOMWLHCGmIrxSD31zjK8IsVQoYjfr42eV2TfDTOvr4Bf_ccGzny7FSeWpQxWLPNpwcz_PTS8TYPAsvOOOwBM0yP6L7tK6uZpsUc2WeIMubtVToAOpaZx1bkt6y46Cj_UxTam65g=w1213-h968?auditContext=prefetch",
      alt: "Kitchen interior design",
      size: "medium",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_HwZL43jLzgncb_8hg3_J-0NQHRxY57N9zIxwAiD0kAgMZFMONFIq0ELfk7aBSETUlsxXnPh-rQ3gIu6PZSxDe1znsM7fResNjOtco1IQ0ZhlySnTeuKwSFFWSXJA1BbZkht5UTxYdstWApNB8LBsFpZCnQEm1vL4kftOlpvTllxm6em7lfSxz3cCaiH9qm0fon8YNZAejzwzU8xxJGso0BsYRp56zNKb2GRevjhOUI1tq6wc3LC4BZ4jPg3bCU26_6F-vRR871TvJrxT9JV0jq10FOXOQZ9zBLMsFySTnWiXUmHJRdPudvdTerYlo9T9viSRAqq3iLpyveTyFm6hqssqk37BDLdncN52T4N06j1Y2sLaRNPypdm_r--0izVZixSQfpg6RdpveJ55LkYMHstx5H-q0HWwbMLIAYje-BBp4hGDmp-rVMRftSBiG1BYGBgbKXop6i7k1vEdfaA6FPByjXZi-dpJPYgvSr9PgDvg_3g2yKX8s0HZE-Fob_ztsWmeYGZktKQaqH3cE7P6Wa75vS-g_Vp8YVc1o1eWPGtR8r5I-8y6KcHhIy6x97nXsA187owImdJPhZ9nqjK8un52-Wodc87oJUIZEPUBgsqAFddETsW7qNkTPRZf7Fd1vh7csGFCZOeBoagjx7ro8wn57AGv_hbA3Fa3cyCYSz1sh0sS9NTqh21mY9aaUmR1YWbgx_kCKjxRBicxZOCokw20q8MHZiN_ibOPW6OLz2FxPJBdN0n2qTkA1xsHqodm-3k_5jisTcY4To6HNHeG6RTmpAKR0KFkzZbzc4ICZJ6Cx7Pmqaf3aImVGQYWmtlyc81dQg6q5JojLW3oqHev5zdOXzV_57Dz_16JBzjfEY3VKeJ4YaoJjYRWsDEf9rAuNllq2JNHRtItpsDkEG0WX8q4fRT0LowNJAj_pmU50z7Y8JmY2xuxlTs3p4XvV-pe9ROIhA4MLphiJMXK18TdznIA=w1213-h968?auditContext=prefetch",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_HwZL43jLzgncb_8hg3_J-0NQHRxY57N9zIxwAiD0kAgMZFMONFIq0ELfk7aBSETUlsxXnPh-rQ3gIu6PZSxDe1znsM7fResNjOtco1IQ0ZhlySnTeuKwSFFWSXJA1BbZkht5UTxYdstWApNB8LBsFpZCnQEm1vL4kftOlpvTllxm6em7lfSxz3cCaiH9qm0fon8YNZAejzwzU8xxJGso0BsYRp56zNKb2GRevjhOUI1tq6wc3LC4BZ4jPg3bCU26_6F-vRR871TvJrxT9JV0jq10FOXOQZ9zBLMsFySTnWiXUmHJRdPudvdTerYlo9T9viSRAqq3iLpyveTyFm6hqssqk37BDLdncN52T4N06j1Y2sLaRNPypdm_r--0izVZixSQfpg6RdpveJ55LkYMHstx5H-q0HWwbMLIAYje-BBp4hGDmp-rVMRftSBiG1BYGBgbKXop6i7k1vEdfaA6FPByjXZi-dpJPYgvSr9PgDvg_3g2yKX8s0HZE-Fob_ztsWmeYGZktKQaqH3cE7P6Wa75vS-g_Vp8YVc1o1eWPGtR8r5I-8y6KcHhIy6x97nXsA187owImdJPhZ9nqjK8un52-Wodc87oJUIZEPUBgsqAFddETsW7qNkTPRZf7Fd1vh7csGFCZOeBoagjx7ro8wn57AGv_hbA3Fa3cyCYSz1sh0sS9NTqh21mY9aaUmR1YWbgx_kCKjxRBicxZOCokw20q8MHZiN_ibOPW6OLz2FxPJBdN0n2qTkA1xsHqodm-3k_5jisTcY4To6HNHeG6RTmpAKR0KFkzZbzc4ICZJ6Cx7Pmqaf3aImVGQYWmtlyc81dQg6q5JojLW3oqHev5zdOXzV_57Dz_16JBzjfEY3VKeJ4YaoJjYRWsDEf9rAuNllq2JNHRtItpsDkEG0WX8q4fRT0LowNJAj_pmU50z7Y8JmY2xuxlTs3p4XvV-pe9ROIhA4MLphiJMXK18TdznIA=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 7,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_HwZL43jLzgncb_8hg3_J-0NQHRxY57N9zIxwAiD0kAgMZFMONFIq0ELfk7aBSETUlsxXnPh-rQ3gIu6PZSxDe1znsM7fResNjOtco1IQ0ZhlySnTeuKwSFFWSXJA1BbZkht5UTxYdstWApNB8LBsFpZCnQEm1vL4kftOlpvTllxm6em7lfSxz3cCaiH9qm0fon8YNZAejzwzU8xxJGso0BsYRp56zNKb2GRevjhOUI1tq6wc3LC4BZ4jPg3bCU26_6F-vRR871TvJrxT9JV0jq10FOXOQZ9zBLMsFySTnWiXUmHJRdPudvdTerYlo9T9viSRAqq3iLpyveTyFm6hqssqk37BDLdncN52T4N06j1Y2sLaRNPypdm_r--0izVZixSQfpg6RdpveJ55LkYMHstx5H-q0HWwbMLIAYje-BBp4hGDmp-rVMRftSBiG1BYGBgbKXop6i7k1vEdfaA6FPByjXZi-dpJPYgvSr9PgDvg_3g2yKX8s0HZE-Fob_ztsWmeYGZktKQaqH3cE7P6Wa75vS-g_Vp8YVc1o1eWPGtR8r5I-8y6KcHhIy6x97nXsA187owImdJPhZ9nqjK8un52-Wodc87oJUIZEPUBgsqAFddETsW7qNkTPRZf7Fd1vh7csGFCZOeBoagjx7ro8wn57AGv_hbA3Fa3cyCYSz1sh0sS9NTqh21mY9aaUmR1YWbgx_kCKjxRBicxZOCokw20q8MHZiN_ibOPW6OLz2FxPJBdN0n2qTkA1xsHqodm-3k_5jisTcY4To6HNHeG6RTmpAKR0KFkzZbzc4ICZJ6Cx7Pmqaf3aImVGQYWmtlyc81dQg6q5JojLW3oqHev5zdOXzV_57Dz_16JBzjfEY3VKeJ4YaoJjYRWsDEf9rAuNllq2JNHRtItpsDkEG0WX8q4fRT0LowNJAj_pmU50z7Y8JmY2xuxlTs3p4XvV-pe9ROIhA4MLphiJMXK18TdznIA=w1213-h968?auditContext=prefetch",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 8,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_FyVQU4R-Kbao3vEkCJTXPBj5ozJ6ei9bJZJ_nJ4IkOvOyGu6sQ8q3XXrWAG_gXotnts8uNBdzSkTNUa83IhF_lPG7-jHZ7rro4CJA1x9ZvEQkBqnyQJczrI4hvLMzGYqDklqxhZ4SHCo-mahy9zbvxiCfOv5HeXbD7pY8CGQ0qsUwb7VBjZ73HHzoWnDAX3WM4EkCxfbGi5cBgE9YgVN9D-N8Ujnjm_K5xJDkA94IyI2_hPwtnVGjLacG9mgI1xgljBdg4DdAH-WPndfEt2E92b0O9O3UTxXl9fqckkeD4sTQifS2kDKdagxVXm0swrSlRXKXjfzAWOa7jIK7ctrCYGPripldu9EmRp5FgbOBJj9U7or7Vv9NEUOk0xWoNw3HuJ72a6n2YfuN11yamPOZprC1w5SQ9U5VEX7fQF2rptGacQsEx9x-TabIc7tNELDGvxY9T5ca5q54bb6Hxu0YgS8e7U1eYoMipgRMCntRJdkamO_3dJKf1xBVij_tiCVdPXJMJ3nqjrbt4rwZThPJVZyYeogaHF1sL13CIxkEiuhvBMAzIySR7NZQck6dlRP_2tXQ4UJBWJeupf1UtiyLelpfz-2Q8XxpVsJb7FFMFA5WDIg16qce4xR6H04_I5AKYnAYkjdZwbKk9qBWh2smJzKZoKAxIM-vCZj_BVVUYXnulbgAvTgHbb9zj8CUPsjb9vVaxHH1oCrrmC8B9tVH9k0cG6eJ8ChNJOMPxD2KpoaJURApYum9sdgR239RrhUqGoQdCO3r6byNL3F6w5gE0TayRhO5HAytritgL7pG8RJZHG4sHmEEzLyR45vaHiix8MnJQgN9RJY-cj7G_pIWMgdRj5r2hlFqlvuiW8czEQx3Ep2HkEnO9jCR53RRiTgSu9KCDnZNVc1Kf-qKSewOFxmPrs0faFOxnEayofC3D_lIHqUa1NKpyfhDy5fpI6LkuWTBBKTavLYKCH6O5RNfQ=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 9,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_G7KwlneOlmlW3hQ8KexU-hjtpOjLhJQtdSOh-sooGBMtxM4usNbFF4Y8T4ekKpmgvrvjdOJPor_WdWqGcOuoXATOn87TjwIC5OCxVfcotHkBbwRqjW8FwuUYz_WHhP-HSkr9Uay75G8fC-yYoMWep8O9qIcX9NFMVbf4xmz5KXAtH9yleFeY-uiB_0RMw27jLegRJxjwzfHxMs1cdFrBbVfGdF0NfqAFkdLIudw3CmXQIYYau6DfYBHrggFH8dTvSdEenv5aMI_cg5AyRQvEO_TeU5rn6f31xHGz2aTRP1lIcvOO5K8aVhI2gR38V3HY7HL21uQ2Sxka7RG3xRWphANR5U5aLxJOK3wgYxCa3Rql1WvV6XT2zTj8o70emxlG9SBmMzzS4wpKCB9ZBjINXCBvKdW0yh3zKeJ26AhGqoU1SoZqNWTGQvanc9pQJ7fyJ6mX1mJ6CpH4qiKC1F172t76oZ0_qDiW_zZImQ48LaGxw0wSqoCBo8ct_mlAQg3BcuzODbZWFO7yLcpB39-1t_RKNRaBgeNicig00J2w1CzQCje2Slmq9aQkDzFqMVJH-mbOqVyGqppsrI5lnAtK5Yb_Cl7ioEzuML4pGlNgRKmBh8PxLxLdNh4arx7fPfe_3BQw8zY4NjSH_OE_8AWus5m3z4gJIZA89mbhBdp-kvHIoYaAKKNf39Sc_m8hereMqfyAbXPf9m-ZjS1MXUrMPHqp8VHdN2Am7HFFuqS2kqQIK0tNa-Mub_OxtMqOCVPdVw5Xn6pcMnw2gZ57LBqgprQo985oeVye3X_IwRDEjG4enXCax2oIgvpR2v2r7TgYgWG5pmeRDPH6KNADY_XK0zTG5FPiNmoQQnl9u41zOKUk86202ilj77r-9rG_wCJTPSi7StuIitOMBVNnawMhfrrZrEBWqR22MX9NKNdJLEFajizJoVT5aRkT5ylExvBT7T7lBg6mCUC4N-ViJKmsu6KA=w1213-h968?auditContext=prefetch",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 10,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_G9OLG7Us5DPwJDjhtRuODYwAmiw4R5iI_kDwXP3lYn6oY9dZeKFBRUjY2hC9to60jgCp4HGC_0pKHKxIlXJpDTCeIc2M3BmGIWNbBUWRyM1L22JDHvOc2TlVvfBpq6tOwavSqvw956sncUKEAtZHcYOz3Ixp-A25epatyMUb0MoE2G2mjYPKFBPHVUYjX1X6v83yE22zadZv9YkrYQvZ_LLoCI-MfzQN4HnVnrJuDQTcw_9sdXMcVsWfqry-mxCEdyo5d_Krbg2BBJ43j3G7MVfBo0s8Fy40HdLx5ijls49TDEaCirsIYCktDFyuKvotJsc9DDYBSszT39hBynQExr1P6ZMTckMNfx1dm8jiSKyB02Jui0kla_hZ2DpbnojeeutRarm2pKnuqa30zGfUf5snyO98AxXc4fa5nqTSy71FqYrtzVAZdCiDNxX_EN_7lrcqBzNZyccjxPrUQxmzmKBJpJmqOVx9TBppYCD8sPtlYe2uQ_jDa_5FjlCQuQ8NtOf9f7Ao8klja0wQkRa0KKMApQRCVu5iLnBS6nuRvf3-rzRELWNDqiiulsWkC2XvINRDdXVwrhk87xwnuKAgSOHr4VsKT7KvSHPp1FyA6VOmBhYtHySiLZt0Y-39HYUvjDxeaUWrizMXJ43N3vrXTGRKmJHMeliNReGwWLPZifz8TBCLNkptBGrfS2LbC2jXuIYrciwTX2FBlupQnXIkyFrEpCOfWmNaHtTU72Fn2eEuoPRHJ-zlGs6uTHio0At3LldDkoqVVHYi5Pdk3wrpiZrLiZM-W_pFsUwgk73nVgTZOo5YiAg-h34WB3APon8TPfMBw5cwlaRJ7TH3gFjz3TR5s7rT8lFs_izOeF6kMHOzwX5UhCPXyN3eaiZDeVbRoqJ5xGu0AzyIh1geOE9Pw1n6KWahIv5O4-_w2ZUj5E43oRroX7qxwK7YSjQq5nnMIPsdfhOS6ADlarV4piToGFwg=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 11,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_GvZLpWWlj0BpjQPH-9q6aWMPxXQ2D9yMutP7QdQcloCc2h-1wjoy0EFO6jVW6IYkRVIdmICmcs63GEoZz23R7QwnbZz7UsRhfUiX-UtFlXtyHRi2KzGTFhLiQaTDnzdsLTY1-NkS8aKfeVYf-QpApxSBSEyCQlPkwH473Iu_SK4qL2I-rBalkNzB-CP9Yjcx9VbD4axujTaTErKgHNK-q2hfA_X0aTHiz-nbHTeyZhEU496df9QdAbmHZd58-GPAukiEnpkLk6OJDK63D9UBZ7i8Z8uNKlvogJeTFI7RbotfVB3xu7cIU_HnZf1vyhRzJUxzfTkQYpEDruyWh-lRU7UuIhuVdd0W39ZpVlqXM4E6qo5XMhrn26GlWZ9bhGdE_Cst1cuF59Y73iVBtbM92DyMiAgIbkrxgSLNo4qg2z0picNIg6fstFxFu3SpLyKZj8K1ADbQnrKbTEBgA5UkHAmb95Y7xZC6ASy4tVGIcW6w2v_bcvMbPdbz6954OBSZjtVYpDtqGkF3Qeua2YbZm5dM8x4cjspgMFsD7xObBtyB6C8ElLb7ck24tVb0f3wQZx8x9dTMnHhBRDn11p9bJW8DfCzIBVnbPclQysi5DFF7Ti6XwBnZKDHhW6pTjJvILpMyv_-4vbbvTb2vs1zyEm4fjaKAiCugZYhGBOD387afIQj1aq-BXITSkdMJxJ-pfBdPHP1CT1WwexBfhWrJja2OfornEAJnKOoNCB0cSDKuRnMYSY4tLzXLkVnZ2XMLe3e8f3Xuvk9Dro6VAc0QkP_YUPxOq4docUiYZPxpc1MLXytwGDMsJfN4daI0kq_iILtxATFQP-u39dDMkNEXiX_Qih_OKPHAFkjWaXsUnGvH99cPOIuq9qQ_5tiJN7EJZoIhLWCMlf3-ZDTUeCRTjqx9PmzTU6PRIjiT5uq4iNYWJhysvSRhXFzPeJ-pyK38XjPC_IdetCldAenITUGzrm=w1213-h968?auditContext=prefetch",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 12,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_GipdeI6HPLbYbbrE4sLpWpGYUWqCDfnRGu2frlEXzRBdXkJAljCPFHbzkPOSAf3z9MMppEeOLuBCcSZ3DzqL0KHQ2GAeQZC18FblYpUluAVVfpSpFoZYKnV9d-bgxcgSpb203bt2znbxo9xV0SZEIkozuAWTwuIbGFxWZqgXmVaxyXuta77KZWcQmhyFu2oErKVvnK4uzg3_idf40gIh76-X_OcA-pSuK0UAcdhFm500KgviIuRqARMvM3S-p_3pQhL-mqyuECtVWDXH7vb7Qh0AKp_Ov-0JH1_cS89evvN1L__Pp5FsNYVOrtuay8dQOTE7v1SlkDLHNrn2AZaJmMk_3VNS4RR3gRvmV6-WTU5c36OwVlj6yxaTqP_c2quxF0UfwOSxLhtCO06n91faUHDffPHaBRse7EkYm4rWv_50qOCcbi4YrmGX7_MavKXdu8oEATRGC3x4elosGiRhSf8tDaimCqKhFwXidQdz7gDJDWKaSLc95txbmNqLQTpIvSY0q2s9e35xRdYTzX5pnebL3rNPccyxiEJEsCNOqmkgxKVBcG8bTgmU50jS4WEwUj_q9VA36aqNFDuyrcZnCWySHsLASS7ftu_T-cgeBX8N2EOQ9CcrCufnhoqW_a1taA3YRjYUOgEbnbDlX4Hlct8ldFrfpqVIlWdJ_1kfEMYu-9pBdqCOMWtfGtffD3TTlbTcsubMxc4GMVgxF5fLuKPjqnRe_cwZn3w6cA62iPtbUEptY6h-nmLe23P3qFXqNwyPe3zpAXovoe2wWJFY0-b6JB414RqThM-m0ZCFiaOHDZBQk-ctiNtOpcigLSwQPdT6L_PEfaGfDADdKgkDCIrMKlUl0d3DwWxYg3Q37AFDlP3mlDI6iuqy1BoJtjcPSXbFPz8_c0mD2jxlwbo7tlWPV62KuzmJHEx6B_Z06Ua_ngUNZftfV7rpCd6Soe_ZeX41ax7pdbsXHY1B3aedNh=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },

    {
      id: 15,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_GJU_t_QQ2rLs9quaxdiUajRGCEE6YzdG1OrAgvBd-ZC0nUXI13rjddHZNAHzf68-AnXhNK01rQ4lNq-LS5bM9Wk2tjTCRFiKjD-FpskNNZqCswRNbRwT0nevmLz8o9GoqXJKeNapg1yzmq7ukHwwfzJdP87I6FNeJ7rQkRYkIvy6cX5l8wtn1POemhppfsq7amnUiJSkLMU4TgpL09tiBh2Nc3O8vwaSFqLjssqyi_1J-ZOfzLe06qwWwk-l85EAM0xx7trMAb01ozkUNr69xNwMxBLPbBxFxG1sro5QfjalaUlisp78LBAjBZyHP203oNMif1aFDfowpoEI5THGjLBTJ5VquAgAERoa0eB7GnNieA6s077bdKJ2-LBKTeRL0eNyKM2x9n2aRcGJPNTo33XG9P4fCOJdkIF2j4yP9KmbvmPX2N31xgWSb7iGdlcq9gijlu_VlNyWHUO2sYMn79dxFZ9uRGns-DSw0q--Q5on_-wKjUDeWJ00lNyh4dB0hSg3ApPO8jxgaojivLl6EblqNpcLV4BLt7ghJUUkoIiWDCIiWYhkEQVVV2n0qc62VA7bXInqYZNSNfoigjhWr8zVhsQ5Ok6e98x_nFStR8e172js92XCOrOCXNnAvWTsZ0JCWqPqtlRi_erDEbT5tw2h2yFk5s1oHOjo76jvQlA8-kIv4bi28E1GUOn8ODmA470jSTgLyDZc30l-pgUOLdWw6xndVT7zfCDkPIg9rVt8dBe3sT1TFNGmwyQGXVXO-wcfWDaytUGZoV-zVn1UpsTsUwhSOxm4205spL3V5hS3fOXwyAGH9VvL-eZC0nFQWONlEyx7OtvzUp7TmGHy3oJ0wj_DaACHQqQ34-E9tDBDSFfAezImj9jbRaQnMg0Ys-TKE6_Ip1hRo_jBbCnymN0F_yPXfFohDN185th9yeO5fftZrqdAUxpNDGcfO6xwtvCftooEFrORDyoMVYrkw9Yw=w1213-h968?auditContext=prefetch",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 16,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_GNoiniN6Mlkm5Mm572-_ouJOZYpTln2vPh5QAxKOReJqKCSS8g8zxGHv-3-F--UpHCXAqQNv5vTFMgUAsXVD3CpDrZXecmXpEpGIq3lGzR70SUvFQmL8_Mrm8sMwMVmPMcubS9bXnsp9e5PVIhD-9n_djQHplCyPuYCaMJkQ7fnM3hMt9KfnFcH4SAEuzhDXT9xHrFZ_0iFHt_-l9p6MIXc6l_xrxqquv9poWKgK94i_vcBOt_Pg5J5930vOWjUB9CsTTpaVV0YPag6iykScfXRM4UpA2XSvzPfEouTV53YgbQAzI7ekDcI3qwV2xZECgsBna-vy0fgloh18zJ7wI3HErrMNGW1Qje0uxYMjj0cg247KK2Z1MnylAE7vGfSEXyw4OcHd2_UPyyy9J325l7Y5cKTFdUE-P2v8EzOKnwP80v-705U1G_zQDlx_qrhCyhhsjmcOoVi8bz92G1J5D10_B95axAzhQty9KuMCl5NUbuHBcBCqSrkT228FLF98PdaFN_p_O9Tgnp2YQe3mXESTCbLVK8Z21rZaLPSZ0g1PloDwjk2-jxiJkuIejjFr_XsK-3cRzd95xyMs6SIMPglzbWEdIsUylP-L2zfSLhHkubV8OoyUA5F3Zca16OrXcUbqxLVKWFrESs_1X_QpewQZS3JAotNzfSPiVNl88CVLCag3SqSHh6NNt3SNEltWTLyH5DjlbqCPNboDpYMvuOPpXEy0fbaT1vVvpKP657T9aF4WclUYT2VYVgIgAPxYr8806pAce_CLZbQZ49Cr2UiNTxyitn-XqiZaLJUmXoFDnWh9cYYXFufmOVwAiVB0rrmeKdp2QcdBC8UEi9tJ6wt5sS3RyLXbTOeX1nWEFiVxbpoGSrlFERloJDPNzIFnsa2YJEPVk7COf2H53zc-nz1Lu6jG07GmA9jcBsONBCnyjxg7rSm4LOIXSP-MSwdQSpVTHIlogVaG98JUp5Hnm8OA=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 17,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_E8IuOgM5dRansK_zeGX_RyZ77_3ZamAbSCOZ0gJ4AjlnKPR186E0Kk0PKsK17FcNbUs4DawRiMgFoUa6eCqALkIX6uObHzZX5VfLkXqANjnKlYJ_2STiT0KK1R4n4KxiXuC3o0Dhwc_wQqBhdgtK7ufHVX7-RCH3Drid3YKzPvebJBIHZMeE-6YQSrjYaPGXyBb795lSvGPoiolUmhYDQLxzp0EmloYShrgmedOolfGqP2eDS5UKEaYesIdsAXjdD2lrHro2aykEeLFZ0-FZ8cp2Eh7XEfvIfLdGQ-Yf7npPx-G9yMMusnCJfGfCsotvpsNgVWAIQQaiLxs2-tH5Ef8wqvfrkQcdE25D0dda1iT5EXhPipP8dzRFQQb1p0uNF5fEg0N5w5F0_4eebvw5EG-6e1-q5owd3gjUxJyxYUdwhQyHvVmeC1ytR8E_M-M516iYf2CJwIMd3c0SdMtRuK7Ds-yOfarU4PuSEzbvaO8srOMf8xomWVsyyRaMBRgoMiPve1Y-NBSFavhXKcG_kGX-8cGBBf5G7ptfBN0zFi3PfSI3jlZdx5rlQ_dfkBWTAyeOjvm1DptGs9sSbRImcI6xeKXZBTqplDGl1Rt-M7Mmtvav_mhl5L2UlmQOP9zyiEWvnXOENWseTNxpOSgXVOMm7H3rrGEUf66dX81cAO6G97O3VjvpSaVGl9h0b7s7EcRejA1ryUSn2pahKxezePKEhyIscIQip6An4U0R1FkaEtKfLd1sZ3S_6mfH-Yt2TvBB00IN2jKqh32iA-s0NpFpbsILQIkNwh7tJNt_9QtBJQgdwLBuVXjiHEKn9rlnVozA69U50HEuclS2pNnOlZ3ybo21mDcKuqqxxB81NFtKEmheNWwWcmkKNuEqugWrEuNdKUF0uE2TtYWxUgq3hTDQ2O7GtHJjDwENlm9fLQqEFBV9g2S3pXICz4C2crW7gCbm38qHzlmNvL039QhWnc=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 18,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_E_X3PeAZV_WY3m2LuCBN7aqtNyGPD62SuYILdQ3pq8ED0Z4Hg6o80EamiPQ3Cv4afd03C08GM-cxEk8zZGFJiaJSwvdF4hE8dkbnyO_p5kEAH9t1jiec4x_YMgg0_NyN_7-BhKNeXdJdIKo-MS6ofNyiC8BUUTl3d9zmI15Y5n-MFalTQmBBZjug1YeD9h7vZH3Rb7Zoihszr3TpcaeWEuS9z94aFsVe1azGPR35Lo5KzbcghExUPQI2nlehrpUnR2X0sRNRjZNVsk5ubw65hARc5UU3Us0Ybhxsr7YSf_7UNeHJ7n-QBajgNS4FPtyzsxfyYh6U5JqvtRCEM-vHEDvFWgTQ-Ba7OItaY1ETV3oh_UPrCvJ9ODHkROxFuq30zEI6cDbib2fQ2TIRYJcMtbRDUxihAllxvlrWhiu27tDYCFGiz75mlu9B0XgOd9Ecozy2D0Pqo58xmmfFzBgJf2KBVnzgYSsgRx-F57IhBuobsgrfQufS3k_QzxypZhQYYvvqdOWlj5Tso_g-8wfa97oPTeSD99yJJKX-wWsTNDe3CNmVCXrAOuv-MkcBM0esE3cSx_pi9iYLZO1TgkB7K6okzQvTZOOiYNr7Z-8C56N04Vgx75X8lSx9xV4mufY-joA_cLeQhgWb9ufArMuHteN1CDBQgFWtZw4mAglHF85spxzbSStAoq1RMIJmyjHnQuR049_-VO9c7VE2Rz83bjQtDnmSivJnQhdI1Gh-7lB9h3m1BCblNyG8XKh7HwaUrPNLXz2mO-rXYCe7qI7Lh5JvxfHWs0ecvP8HELRHZ5MHmjqIAKax-QsBaUkIBR7Jn5rIaSPQ-vW0EGEBdG15otvlFS6BQg07Cg24cNxcy3pLUYxhbjJBW9G-QvunLj8ckPIMyQhRJLEhqzw62hjbGnmd7rIsoQhzq4YJgufGYNmnPy33zz6BYLTwMziH_bC9mxWMid76hTJo81RS2UT9Cr=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 19,
      src: "https://lh3.googleusercontent.com/rd-d/ALs6j_FHwDjZl1By_s6TgPMkkCBB9lkKyGAKWgWzFOHUXMDWU_Jgwm1osu-8beQiClc2paZ3mzJdVnxEKUbDw-4ttIQl_6HgkUfLSCs8_s5rypsgHYgnxDDRsoW3S9_u9DJwFJcE7a00ttOn8PnBxfTzlOejnEXRR3RpIW7W_fiGz_ZCJOsI_bxN-DT2dW9Mvvq9C-4TZF9ZioHX_7CZu_AkW-OfXisy2u6CXCayMWUqsBqLlKnu77KXDuhZSu38NFxsnbApO5v9Z9ujq5GT-GtBrhvgY2ke596_HmtpagT2eybBEIPnUVH_YwNXJFy9HXH6cG6v0ve5S1dTniqVeHfD5ZopYRFituXxeKC7aTntJo0mHP1CUNAUSy4aE2w91es--MtQE4cJYmeCuNBDOcQzB5P7s00IPBb_Sx35P2T3d9ZT470s7yD8QBayTbwuumIFFuL3ebAESvEU5bQm1eTMhh0StxU8YJ9SLtKoSiebt2WSYggSbWsz_DVRJW0dmdXiTV2ycCYsXGMNdZmSSbElD3CATRfZlBryR_n0Gc8F-FqmDOwA1lebWenzYGJjgg_M5qgCTkyApUL76aHeVKaqz8qIhtAlbcz6oJfMgPWarjUSgzRxgtk0Z1XI5WslfpNTbbTfm8-WcCy-n0CQ5VW2tkVLXco5nzgk5QQcqy1dW4IYxGUJksrOSEZh4zkClOScfSNv8_dHhynvb4lK5OTZhX19uVh_41tqW7u30MGIgjiYILwUsnDmqzLf4IwoK9gLtRQ2CLsDK2acYI__qtTjBcH5eYEx77n3wT_CBvYN_ZmStRiKl5EoqA2SUym3DUwEum5qkmtm5jX25pTvx1SrArCyDnn6IZyAFPPs8eI06fmyilObVgtscDcedQF7fN75Plq5Zf85VvQ_PBuq2Rh-LV9NgnDfgSss3ZHMptoAdRhWifotP5w4h-TaFv-dY_jWO0VYy-u9AuJ2PllWFeUOJsHiJA=w1213-h968?auditContext=prefetch",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "tall":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Title */}
          <h2
            className={`text-3xl sm:text-3xl lg:text-4xl text-[#173F29] font-medium mb-12  ${lora.className}`}
          >
            A Gallery of Serenity
          </h2>

          {/* Gallery Grid */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-auto md:${getSizeClasses(
                  image.size
                )}`}
                onClick={() => openModal(image, index)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Modal Header */}
          <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black/50 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                <h3
                  className="text-white text-xl font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Gallery of Serenity
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-60"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-60"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="max-w-6xl max-h-[90vh] mx-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/30 backdrop-blur-sm p-4 max-w-2xl overflow-x-auto">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openModal(image, index)}
                className={`flex-shrink-0 w-24 h-18 rounded overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? "ring-2 ring-white opacity-100 scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Close on backdrop click */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default GalleryOfSerenity;
