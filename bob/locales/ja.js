window.i18n = window.i18n || {};
window.i18n.ja = {
  app_title: "防災チェックリスト",
  sip_title: "在宅避難 (Shelter-In-Place)",
  home_title: "家庭用緊急キット",
  home_description: "自宅で基本的な安全と生存を確保することを目的とし、通常7～14日間の自給自足を想定",
  beta_tag: "避難経路計画（BETA）->",
  total_progress: "全体の進捗状況",

  landing: {
    main_title: "防災チェックリスト",
    sip_button_title: "在宅避難",
    sip_button_subtitle: "Shelter-in-Place",
    edc_button_title: "毎日の携帯品",
    edc_button_subtitle: "Everyday Carry",
    ghb_button_title: "帰宅用バッグ",
    ghb_button_subtitle: "Get Home Bag",
    bob_button_title: "緊急避難バッグ",
    bob_button_subtitle: "Bug Out Bag",
    coming_soon: "近日公開"
  },

  common: {
    progress: "準備の進捗",
    completed: "完了済み",
    people: "人数",
    days: "日数",
    person: "人",
    day: "日",
    total: "合計",
    per_person: "1人あたり",
    item: "アイテム",
    back: "戻る",
    prepare: "準備する"
  },

  categories: {
    food: {
      title: "食料",
      category: "FOOD",
      description: "食料準備の3原則：調理不要、高栄養価、長期保存可能。<p>災害時は電気やガスが使えず、調理する時間もない場合があります。すぐに食べられる冷たい食品を選びましょう。タンパク質・炭水化物・脂質・ビタミンをバランス良く含む食品が理想です。<br>例：缶詰、インスタント食品、自熱式食品、エナジーバー、ナッツ、スポーツドリンク粉末など。</p>"
    },
    medical: {
      title: "医療用品",
      category: "MEDICAL",
      description: "<p>自己・相互支援が基本：災害後すぐに医療支援が受けられない可能性があります。</p><li>応急処置用品：外傷や転倒、出血などに対応</li><li>よくある症状：切り傷、やけど、下痢、風邪</li><li>慢性疾患の薬：高血圧、糖尿病、喘息など</li><p>*薬は定期的に使用期限を確認し、高温多湿を避けて保管してください。</p>"
    },
    living: {
      title: "生活用品",
      category: "LIVING",
      description: "<p>日用品は見落とされがちですが、準備が不十分だと不便やストレスの原因になります。<br>特に水や電気が使えない環境では、清潔さを保つための準備が重要です。</p><p>多機能・軽量・耐久性に優れたものを選び、清潔・収納・代替機能を意識しましょう。<br>※1人ずつ「衛生ポーチ」を準備し、乾・湿用品を分けて収納すると便利です。</p>"
    },
    info: {
      title: "情報・通信",
      category: "INFORMATION",
      description: "<p>外部情報の入手と通信手段の確保は命を守る手段となります。<br>情報を得る力・発信する力を維持することが災害時に非常に重要です。</p><p>機器は複数の電源方式に対応しているものを選び、電源の集中依存を避けましょう。省電力モードを活用し、必要な時のみ使用することでバッテリーを延命できます。</p>"
    },
    tools: {
      title: "道具類",
      category: "TOOLS",
      description: "<p>災害後の生活において、基本的な道具は命を守る道具になることもあります。<br>多機能性・耐久性・持ち運びやすさを優先し、修理・照明・安全確保に役立つものを備えましょう。</p><p>すぐに取り出せる場所に保管し、家族全員が場所と使い方を知っておくことが大切です。<br>※1人ずつ「個人ツールセット」を準備し、種類別に分けて収納すると便利です。</p>"
    }
  },

  items: {
    food: {
      water: {
        name: "水",
        description: "1人1日3リットルの水分補給",
        note: "災害時は1人あたり2～3リットルの飲料水が必要。夏場はさらに多く必要になる場合もある"
      },
      instant_food: {
        name: "レトルトご飯・クラッカー・インスタント麺",
        description: "主食として炭水化物を補給",
        note: "調理不要または簡単に温められる食品を選び、基本的なカロリーを確保"
      },
      protein_can: {
        name: "缶詰（ツナ／鶏肉）",
        description: "タンパク質を補給し、筋肉を維持",
        note: "保存期間が長く、1日1食以上のタンパク源を確保することが重要"
      },
      energy_bar: {
        name: "高カロリー（エナジーバー・チョコレート）",
        description: "脂質・即効性エネルギーを補給",
        note: "エネルギー密度が高く、素早く栄養を摂取できる。心理的な安心感にもつながる"
      },
      electrolyte: {
        name: "電解質パウダー",
        description: "電解質を補給し、体液バランスと精神を維持",
        note: "脱水症状や下痢、大量の発汗時に有効"
      },
      vitamin: {
        name: "マルチビタミン",
        description: "微量栄養素を補う",
        note: "栄養バランスを保つために重要。特に長期避難時に必要"
      }
    },
    medical: {
      personal_med: {
        name: "常用薬・処方薬",
        description: "持病の薬や個人の必要に応じた薬",
        note: "個々の健康状態に応じて、十分な薬を準備しておくこと"
      },
      first_aid: {
        name: "救急セット",
        description: "包帯、ガーゼ、テープ、軟膏、消毒液などを含む",
        note: "1人に1セットの基本的な救急用品を備える"
      },
      common_med: {
        name: "常備薬",
        description: "風邪・発熱薬、胃薬、酔い止め、鎮痛剤、発泡錠、目薬、万能軟膏、虫刺され薬など",
        note: "1セットで十分。使用期限を定期的に確認する"
      },
      mask: {
        name: "マスク / N95マスク",
        description: "ほこり・煙・有害ガスなどから保護",
        note: "1人あたり1日1枚を目安に。再利用可能なタイプで数を減らせる"
      },
      tissue: {
        name: "トイレットペーパー",
        description: "基本的な衛生用品",
        note: "1人5日ごとに1パックを目安に備蓄する"
      },
      pad: {
        name: "生理用ナプキン",
        description: "女性の月経用必需品",
        note: "1人30日ごとに1セット。緊急時には止血などにも代用可能"
      },
      alcohol: {
        name: "アルコール・消毒液",
        description: "表面や傷の消毒に使用",
        note: "1本あれば十分。安全に保管する"
      }
    },
    living: {
      blanket: {
        name: "毛布",
        description: "基本的な保温と就寝の快適さを提供",
        note: "コンパクトで軽量なものを選び、冬場は保温性も考慮する"
      },
      clothes: {
        name: "着替え・防寒衣類",
        description: "替えの服と保温のためのレイヤー",
        note: "乾きやすく、しわになりにくい快適な服を準備する"
      },
      toilet: {
        name: "携帯トイレ",
        description: "折りたたみ式の簡易トイレ",
        note: "高層階や断水時に便利。トイレットペーパーは医療用品に含まれる"
      },
      gel_pad: {
        name: "凝固剤・吸収パッド",
        description: "排泄物を固め、無臭で安全に処理できる",
        note: "断水時にも使用可能。ない場合はごみ袋で代用"
      },
      trash_bag: {
        name: "ごみ袋",
        description: "生ごみ・排泄物・廃棄物の仕分け、簡易防水としても活用可能",
        note: "大型の黒い袋は防水、簡易トイレの内袋、簡易給水袋にも使える"
      },
      soap_sanitizer: {
        name: "石けん／アルコールジェル",
        description: "手洗いと除菌に使用",
        note: "石けんは器具の洗浄に、アルコールは手指の消毒に使用"
      },
      wet_wipes: {
        name: "ウェットティッシュ",
        description: "水が使えない状況での清拭・衛生用",
        note: "厚手タイプを選ぶと清潔を保ちやすい"
      },
      tarp_raincoat: {
        name: "防水シート／レインコート",
        description: "雨よけ、シート、目隠しなど多用途に活用",
        note: "地面に敷いたり、風雨を防いだりと多目的に使える"
      },
      water_bucket: {
        name: "バケツ／給水袋",
        description: "雨水や配給水の保管用",
        note: "雨水の収集や給水支援の受け取りに使用"
      },
      water_filter: {
        name: "携帯用浄水器",
        description: "飲料水を確保するためのろ過装置",
        note: "不純物を取り除き、清潔な飲み水を得られる"
      },
      ziplock_bag: {
        name: "ジップロック／耐熱食品袋",
        description: "食品の保存や仕分けに便利",
        note: "保存のほか、湯煎加熱調理などにも使える"
      }
    },
    info: {
      power_bank: {
        name: "モバイルバッテリー",
        description: "携帯機器の充電用",
        note: "20000mAh以上が推奨、複数回スマホを充電可能"
      },
      radio: {
        name: "ラジオ",
        description: "災害情報・公式通知を受信",
        note: "災害時は最も信頼性の高い情報源。複数電源に対応したものを選ぶ"
      },
      generator: {
        name: "手回し／ソーラー発電機",
        description: "ラジオやスマホなどの充電に使用",
        note: "ラジオやバッテリーと併用することで停電時の電源確保が可能"
      },
      spare_phone: {
        name: "予備の携帯電話",
        description: "緊急通話やオフライン地図用",
        note: "古いスマホに連絡先や地図を保存し、AirTagとの併用も推奨"
      },
      charging_cable: {
        name: "充電ケーブル／アダプター",
        description: "各種機器の充電に使用",
        note: "自分の機器に対応するケーブルを事前に確認しておく"
      },
      whistle: {
        name: "ホイッスル／緊急音響信号器",
        description: "非電子型の救助用信号発信手段",
        note: "通信不可の場面で有効。携帯しやすく便利"
      },
      contact_card: {
        name: "連絡カード／伝言ボード",
        description: "身分証と一緒に持つ、1人に1枚",
        note: "避難先や行動記録を残す用途。緊急連絡先、血液型、持病も記入"
      },
      spare_battery: {
        name: "予備電池",
        description: "ラジオや懐中電灯用の単三／単四電池",
        note: "停電時の機器使用を維持するために重要"
      }
    },
    tools: {
      multi_tool: {
        name: "多機能ナイフ",
        description: "切断、缶開け、工具など複数の機能を備える",
        note: "災害時に最も役立つツールの一つ。信頼できるメーカーの製品を選ぶ"
      },
      headlamp: {
        name: "ヘッドライト",
        description: "夜間や停電時の照明用",
        note: "LEDタイプで長時間点灯できるものが理想。一人一台推奨"
      },
      lighter: {
        name: "ライター／防水マッチ",
        description: "火起こし・調理・照明に使用",
        note: "濡れても使える防水タイプが便利。ガスが使えない時の備えにも"
      },
      gas_stove: {
        name: "カセットコンロ",
        description: "調理や加熱に使用",
        note: "簡単に収納でき、ガスボンベで手軽に使用可能"
      },
      gas_can: {
        name: "ガスボンベ",
        description: "燃料用",
        note: "1人あたり3日で1本を目安に。まとめて調理し燃料を節約"
      },
      flashlight: {
        name: "懐中電灯／ランタン",
        description: "照明用の機器",
        note: "充電式・手回し式や家庭／屋外両用のランタンが便利"
      },
      compass: {
        name: "コンパス",
        description: "方向確認とナビゲーション用",
        note: "ロープやホイッスル付きの多機能タイプが便利"
      },
      waterproof_map: {
        name: "防水地図",
        description: "避難経路や資源の位置を確認",
        note: "自宅周辺と避難先の位置を記し、重要な場所をマーク"
      },
      gloves: {
        name: "耐切創手袋",
        description: "破片処理や清掃時に手を保護",
        note: "耐久性と滑り止め機能を備えたものが理想"
      }
    },  
  }
};
