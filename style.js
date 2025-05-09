// JavaScript Document// ポップアップ通知の表示処理
 document.addEventListener('DOMContentLoaded', function() {
      // フォーム要素を取得
      const form = document.querySelector('form');
      // 通知要素を取得
      const notification = document.getElementById('notification');
      
      // フォームの送信イベントを処理
      form.addEventListener('submit', function(event) {
        // デフォルトの送信動作を防止（デモ用）
        event.preventDefault();
        
        // フォームのバリデーションチェック
        if (form.checkValidity()) {
          // 通知を表示
          notification.classList.add('show');
          
          // 3秒後に通知を非表示
          setTimeout(function() {
            notification.classList.remove('show');
          }, 3000);
          
          // フォームをリセット（オプション）
          form.reset();
        } else {
          // バリデーションに失敗した場合はブラウザのデフォルト動作
          form.reportValidity();
        }
      });
    });
